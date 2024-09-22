import type Box from '../Box';
import Piece from '../Piece';
import Bishop from './Bishop';
import Rook from './Rook';

export default class Queen extends Piece {
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
	}
	getMoves(board: Box[][]) {
		const validBoxes: Box[] = [];
		validBoxes.push(...Bishop.getBishopMoves(board, this.color, this.row, this.col));
		validBoxes.push(...Rook.getRookMoves(board, this.color, this.row, this.col));
		return validBoxes;
	}
}
