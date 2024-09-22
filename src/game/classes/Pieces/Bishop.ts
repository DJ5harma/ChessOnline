import Box from '../Box';
import Piece from '../Piece';

export default class Bishop extends Piece {
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
	}
	static getBishopMoves(board: Box[][], color: 0 | 1, thisrow: number, thiscol: number) {
		const validBoxes: Box[] = [];

		function collided(row: number, col: number) {
			if (board[row][col].constructor.name != 'Box') {
				if ((board[row][col] as Piece).color !== color) validBoxes.push(board[row][col]);
				return true;
			}
			return false;
		}

		let row = thisrow + 1,
			col = thiscol + 1;
		while (row < 8 && col < 8) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row++;
			col++;
		}

		row = thisrow - 1;
		col = thiscol - 1;
		while (row >= 0 && col >= 0) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row--;
			col--;
		}

		row = thisrow + 1;
		col = thiscol - 1;
		while (row < 8 && col >= 0) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row++;
			col--;
		}

		row = thisrow - 1;
		col = thiscol + 1;
		while (row >= 0 && col < 8) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row--;
			col++;
		}

		return validBoxes;
	}
	getMoves(board: Box[][]) {
		return Bishop.getBishopMoves(board, this.color, this.row, this.col);
	}
}
