import { writable } from 'svelte/store';
import type { ImatchRequest, IonlineUser } from '../utils/types';

export const matchRequests = writable(new Map<string, ImatchRequest>()); // socket.id, userInfo

export function addNewMatchRequest(data: {
	socketId: string;
	userInfo: IonlineUser;
	tempKey: string;
}) {
	matchRequests.update((users) => {
		users.set(data.socketId, { ...data.userInfo, tempKey: data.tempKey });
		return new Map(users);
	});
}
export function ignoreMatchRequest(requesterSocketId: string) {
	matchRequests.update((users) => {
		users.delete(requesterSocketId);
		return new Map(users);
	});
}
export function ignoreAllMatchRequests() {
	matchRequests.update(() => new Map());
}
