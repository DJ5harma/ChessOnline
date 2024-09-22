import type Box from '../Box';
import MoveSensitivePiece from '../MoveSensitivePiece';
import type Piece from '../Piece';

export default class Rook extends MoveSensitivePiece {
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
	}
	static getRookMoves(board: Box[][], color: 0 | 1, thisrow: number, thiscol: number) {
		const validBoxes: Box[] = [];

		function collided(row: number, col: number) {
			if (board[row][col].constructor.name != 'Box') {
				if ((board[row][col] as Piece).color !== color) validBoxes.push(board[row][col]);
				return true;
			}
			return false;
		}

		let row = thisrow + 1,
			col = thiscol;
		while (row < 8) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row++;
		}

		row = thisrow - 1;
		while (row >= 0) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row--;
		}

		row = thisrow;
		col = thiscol - 1;
		while (col >= 0) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			col--;
		}

		col = thiscol + 1;
		while (col < 8) {
			if (collided(row, col)) break;
			validBoxes.push(board[row][col]);
			row--;
			col++;
		}
		return validBoxes;
	}
	getMoves(board: Box[][]) {
		Rook.getRookMoves(board, this.color, this.row, this.col);
	}
}
