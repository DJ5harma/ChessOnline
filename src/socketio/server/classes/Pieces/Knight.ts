import type Box from '../Box';
import Piece from '../Piece';

export default class Knight extends Piece {
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
	}
	getMoves(board: Box[][]) {
		const validBoxes: Box[] = [];
		const color = this.color;

		function tryPushing(row: number, col: number) {
			if (
				row < 8 &&
				row >= 0 &&
				col < 8 &&
				col >= 0 &&
				(board[row][col].constructor.name === 'Box' || (board[row][col] as Piece).color !== color)
			)
				validBoxes.push(board[row][col]);
		}
		const row = this.row,
			col = this.col;

		tryPushing(row + 2, col + 1);
		tryPushing(row + 2, col - 1);
		tryPushing(row - 2, col + 1);
		tryPushing(row - 2, col - 1);

		tryPushing(row + 1, col + 2);
		tryPushing(row + 1, col - 2);
		tryPushing(row - 1, col + 2);
		tryPushing(row - 1, col - 2);

		return validBoxes;
	}
}
