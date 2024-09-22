import type { IonlineUserWithSocketID } from '../../utils/types';
import getStartingBoard from '../getStartingBoard';
import type Box from './Box';

export default class Game {
	board: Box[][];
	whitePlayer: IonlineUserWithSocketID;
	blackPlayer: IonlineUserWithSocketID;
	move: number;
	constructor(player1: IonlineUserWithSocketID, player2: IonlineUserWithSocketID) {
		if (Math.random() > 0.5) {
			this.whitePlayer = player1;
			this.blackPlayer = player2;
		} else {
			this.whitePlayer = player2;
			this.blackPlayer = player1;
		}
		this.board = getStartingBoard();
		this.move = 1;
	}
}
