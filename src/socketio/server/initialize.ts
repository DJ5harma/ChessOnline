import { Server as SocketServer } from 'socket.io';
import express from 'express';
import http from 'http';
import type { IonlineUser } from '../../utils/types';

const app = express();
const server2 = http.createServer(app);

const onlineUsers = new Map<string, IonlineUser>();
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
			onlineUsers.set(socket.id, userInfo);
			socket.broadcast.emit('A new user is online', { socketId: socket.id, userInfo });
		});
		socket.on('disconnect', () => {
			onlineUsers.delete(socket.id);
			socket.broadcast.emit('A user disconnected', socket.id);
		});
	});
	server2.listen(3000, () => console.log('Socket Server is running'));
}
