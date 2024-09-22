import type Box from '../Box';
import MoveSensitivePiece from '../MoveSensitivePiece';
import type Piece from '../Piece';
import type Rook from './Rook';

export default class King extends MoveSensitivePiece {
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col, color);
	}
	getMoves(board: Box[][]) {
		const validBoxes = new Set<Box>();
		const color = this.color;
		const row = this.row;
		const col = this.col;

		function tryPushing(row: number, col: number) {
			if (
				row < 8 &&
				row >= 0 &&
				col < 8 &&
				col >= 0 &&
				(board[row][col].constructor.name === 'Box' || (board[row][col] as Piece).color !== color)
			)
				validBoxes.add(board[row][col]);
		}

		tryPushing(row - 1, col - 1);
		tryPushing(row - 1, col);
		tryPushing(row - 1, col + 1);
		tryPushing(row, col - 1);
		tryPushing(row, col + 1);
		tryPushing(row + 1, col - 1);
		tryPushing(row + 1, col);
		tryPushing(row + 1, col + 1);

		// opponent targets
		// board.forEach((ROW) =>
		// 	ROW.forEach((block) => {
		// 		if (
		// 			block.constructor.name !== "Box" &&
		// 			(block as Piece).color !== this.color
		// 		) {
		// 			// console.log();
		// 		}
		// 	})
		// );

		// castling
		if (!this.hasMoved) {
			if (this.color === 0) {
				const rookL = board[0][0] as Rook;
				if (
					!rookL.hasMoved &&
					board[0][1].constructor.name === 'Box' &&
					board[0][2].constructor.name === 'Box'
				) {
					validBoxes.add(board[0][1]);
				}

				const rookR = board[0][7] as Rook;
				if (
					!rookR.hasMoved &&
					board[0][5].constructor.name === 'Box' &&
					board[0][6].constructor.name === 'Box'
				) {
					validBoxes.add(board[0][6]);
				}
			} else {
				const rookL = board[7][0] as Rook;
				if (
					!rookL.hasMoved &&
					board[7][1].constructor.name === 'Box' &&
					board[7][2].constructor.name === 'Box'
				) {
					validBoxes.add(board[7][1]);
				}

				const rookR = board[7][7] as Rook;
				if (
					!rookR.hasMoved &&
					board[7][5].constructor.name === 'Box' &&
					board[7][6].constructor.name === 'Box'
				) {
					validBoxes.add(board[7][6]);
				}
			}
		}

		const res: Box[] = [];
		validBoxes.forEach((block) => res.push(block));
		return res;
	}
}
