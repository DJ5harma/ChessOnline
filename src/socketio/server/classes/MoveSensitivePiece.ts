import Piece from './Piece';

export default class MoveSensitivePiece extends Piece {
	hasMoved: boolean;
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
		this.hasMoved = false;
	}
}
