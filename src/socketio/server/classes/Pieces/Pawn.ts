import type Box from '../Box';
import MoveSensitivePiece from '../MoveSensitivePiece';
import type Piece from '../Piece';

export default class Pawn extends MoveSensitivePiece {
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
	}
	getMoves(board: Box[][]) {
		const validBoxes: Box[] = [];
		let row = this.row;
		const col = this.col;
		const color = this.color;

		const multiplier = this.color === 0 ? 1 : -1;

		if (!this.hasMoved) validBoxes.push({ row: row + multiplier * 2, col });
		row += multiplier;
		if (row < 8) {
			validBoxes.push({ row, col });
			if (
				board[row][col + multiplier].constructor.name !== 'Box' &&
				(board[row][col + multiplier] as Piece).color != color
			) {
				validBoxes.push(board[row][col + multiplier]);
			}
			if (
				board[row][col + multiplier].constructor.name !== 'Box' &&
				(board[row][col + multiplier] as Piece).color != color
			) {
				validBoxes.push(board[row][col + multiplier]);
			}
		}
		return validBoxes;
	}
}
