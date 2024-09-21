import { writable } from 'svelte/store';
import type { IonlineUser } from '../utils/types';

export const onlineUsers = writable(new Map<string, IonlineUser>()); // socket.id, userInfo

export function addNewOnlineUser(data: { socketId: string; userInfo: IonlineUser }) {
	onlineUsers.update((users) => {
		users.set(data.socketId, data.userInfo);
		return new Map(users);
	});
}
export function addPreviousOnlineUsers(data: [string, IonlineUser][]) {
	onlineUsers.update((users) => {
		data.forEach((itr) => users.set(itr[0], itr[1]));
		return new Map(users);
	});
}
export function deleteAnOnlineUser(socketId: string) {
	onlineUsers.update((users) => {
		users.delete(socketId);
		return new Map(users);
	});
}
