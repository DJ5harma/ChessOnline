import { io, type Socket } from 'socket.io-client';
import type { IonlineUser } from '../../utils/types';
import {
	addNewOnlineUser,
	addPreviousOnlineUsers,
	deleteAnOnlineUser
} from '../../contexts/onlineUsers';
import { addNewMatchRequest } from '../../contexts/matchRequests';
import { goto } from '$app/navigation';

let socket: Socket | null = null;

export default function connectSocket(myInfo?: IonlineUser) {
	if (socket !== null) return;
	socket = io('http://localhost:3000');
	socket.on('connect', () => socket!.emit('I am online', myInfo));
	socket.on('inform about previous online users', (data) => addPreviousOnlineUsers(data));
	socket.on('A new user is online', (data) => addNewOnlineUser(data));
	socket.on('A user disconnected', (data) => deleteAnOnlineUser(data));
	socket.on('A new match request', (data) => addNewMatchRequest(data));
	socket.on('Your match is at url', (url: string) => goto(url));
}
export function sendAMatchRequest(opponentSocketId: string) {
	socket?.emit('I want to play with', opponentSocketId);
}
export function sendAMatchAcceptance(opponentSocketId: string, tempKey: string) {
	socket?.emit('I accept a match with', opponentSocketId, tempKey);
}
export function disconnectSocket() {
	socket?.disconnect();
}
