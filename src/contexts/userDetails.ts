import { writable } from 'svelte/store';
import type { CuserDetails } from '../utils/types';

export const userDetails = writable<CuserDetails>({
	username: '',
	gamesPlayed: 0,
	gamesWon: 0,
	gamesLost: 0,
	isGuest: true,
	connected: false
});
export function updateUserDetails(data: CuserDetails) {
	userDetails.update(() => data);
}

export const showForm = writable(false);
