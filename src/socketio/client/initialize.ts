import { io, type Socket } from 'socket.io-client';
import type { IonlineUser } from '../../utils/types';
import {
	addNewOnlineUser,
	addPreviousOnlineUsers,
	deleteAnOnlineUser
} from '../../contexts/onlineUsers';

export const cSocket: {
	e: Socket | null;
} = {
	e: null
};

export default function connectSocket(myInfo?: IonlineUser) {
	if (cSocket.e !== null) return;
	cSocket.e = io('http://localhost:3000');
	cSocket.e.on('connect', () => cSocket.e!.emit('I am online', myInfo));
	cSocket.e.on('inform about previous online users', (data) => addPreviousOnlineUsers(data));
	cSocket.e.on('A new user is online', (data) => addNewOnlineUser(data));
	cSocket.e.on('A user disconnected', (data) => deleteAnOnlineUser(data));
}
export function disconnectSocket() {
	cSocket.e?.disconnect();
}
