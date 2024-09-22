export interface IonlineUser {
	username: string;
	wantingToPlay: boolean;
}
export interface ImatchRequest extends IonlineUser {
	tempKey: string;
}
export interface IonlineUserWithSocketID extends IonlineUser {
	socketId: string;
}
export interface CuserDetails {
	username: string;
	gamesPlayed: number;
	gamesWon: number;
	gamesLost: number;
	isGuest: boolean;
	connected: boolean;
}
