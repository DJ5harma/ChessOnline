import { writable } from 'svelte/store';

export const userDetails = writable({
	username: `Anonymous ${(Math.random() * 10000000).toFixed(0)}`,
	gamesPlayed: 0,
	gamesWon: 0,
	gamesLost: 0,
	isGuest: true,
	socketId: ''
});

export const showForm = writable(false);
