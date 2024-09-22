import { Server as SocketServer } from 'socket.io';
import express from 'express';
import http from 'http';
import type { IonlineUser } from '../../utils/types';
import { startNewGame } from './ongoingGames';

const app = express();
const server2 = http.createServer(app);

const onlineUsers = new Map<string, IonlineUser>();
const TempKeysToPlayWithRequesters = new Map<string, string>(); // key, requesterSocketId
export let io: SocketServer | undefined;

export default function initializeSocketServer() {
	if (io) return;
	io = new SocketServer(server2, {
		cors: {
			origin: 'http://localhost:5173', // Allow frontend reqs
			methods: ['GET', 'POST']
		}
	});

	io.on('connection', (socket) => {
		io?.to(socket.id).emit('inform about previous online users', [...onlineUsers]);

		socket.on('I am online', (userInfo: IonlineUser) => {
			socket.broadcast.emit('A new user is online', { socketId: socket.id, userInfo });
			onlineUsers.set(socket.id, userInfo);
		});

		socket.on('I want to play with', (opponentSocketId: string) => {
			const tempKey = (Math.random() + 1).toString(36).substring(2);
			console.log('random', tempKey);
			TempKeysToPlayWithRequesters.set(tempKey, socket.id);
			io?.to(opponentSocketId).emit('A new match request', {
				socketId: socket.id,
				userInfo: onlineUsers.get(socket.id),
				tempKey
			});
		});
		socket.on('I accept a match with', (requesterSocketId: string, tempKey: string) => {
			if (TempKeysToPlayWithRequesters.get(tempKey) !== requesterSocketId) {
				io?.to(socket.id).emit('Your match is at url', "Did you seriously think it'd work");
				return;
			}
			io?.to([requesterSocketId, socket.id]).emit('Your match is at url', tempKey);
			const requester = onlineUsers.get(requesterSocketId);
			const acceptor = onlineUsers.get(socket.id);
			if (!requester || !acceptor) return;
			startNewGame(tempKey, requester, acceptor);
			TempKeysToPlayWithRequesters.delete(tempKey);
		});

		socket.on('disconnect', () => {
			onlineUsers.delete(socket.id);
			socket.broadcast.emit('A user disconnected', socket.id);
		});
	});
	server2.listen(3000, () => console.log('Socket Server is running'));
}
