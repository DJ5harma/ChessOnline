import type Box from '../socketio/server/classes/Box';

export interface IonlineUser {
	username: string;
	wantingToPlay: boolean;
}
export interface ImatchRequest extends IonlineUser {
	tempKey: string;
}
export interface CuserDetails {
	username: string;
	gamesPlayed: number;
	gamesWon: number;
	gamesLost: number;
	isGuest: boolean;
	connected: boolean;
}

export interface IongoingGame {
	player1: string;
	player2: string;
	board: Box[][];
}
