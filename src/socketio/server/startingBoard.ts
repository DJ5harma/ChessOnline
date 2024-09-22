import Box from './classes/Box';
import Bishop from './classes/Pieces/Bishop';
import King from './classes/Pieces/King';
import Knight from './classes/Pieces/Knight';
import Pawn from './classes/Pieces/Pawn';
import Queen from './classes/Pieces/Queen';
import Rook from './classes/Pieces/Rook';

const startingBoard = [
	[
		new Rook(0, 0, 0),
		new Knight(0, 1, 0),
		new Bishop(0, 2, 0),
		new Queen(0, 3, 0),
		new King(0, 4, 0),
		new Bishop(0, 5, 0),
		new Knight(0, 6, 0),
		new Rook(0, 7, 0)
	],
	[
		new Pawn(1, 0, 0),
		new Pawn(1, 1, 0),
		new Pawn(1, 2, 0),
		new Pawn(1, 3, 0),
		new Pawn(1, 4, 0),
		new Pawn(1, 5, 0),
		new Pawn(1, 6, 0),
		new Pawn(1, 7, 0)
	],
	[
		new Box(2, 0),
		new Box(2, 1),
		new Box(2, 2),
		new Box(2, 3),
		new Box(2, 4),
		new Box(2, 5),
		new Box(2, 6),
		new Box(2, 7)
	],
	[
		new Box(3, 0),
		new Box(3, 1),
		new Box(3, 2),
		new Box(3, 3),
		new Box(3, 4),
		new Box(3, 5),
		new Box(3, 6),
		new Box(3, 7)
	],
	[
		new Box(4, 0),
		new Box(4, 1),
		new Box(4, 2),
		new Box(4, 3),
		new Box(4, 4),
		new Box(4, 5),
		new Box(4, 6),
		new Box(4, 7)
	],
	[
		new Box(5, 0),
		new Box(5, 1),
		new Box(5, 2),
		new Box(5, 3),
		new Box(5, 4),
		new Box(5, 5),
		new Box(5, 6),
		new Box(5, 7)
	],
	[
		new Pawn(6, 0, 1),
		new Pawn(6, 1, 1),
		new Pawn(6, 2, 1),
		new Pawn(6, 3, 1),
		new Pawn(6, 4, 1),
		new Pawn(6, 5, 1),
		new Pawn(6, 6, 1),
		new Pawn(6, 7, 1)
	],
	[
		new Rook(7, 0, 1),
		new Knight(7, 1, 1),
		new Bishop(7, 2, 1),
		new Queen(7, 3, 1),
		new King(7, 4, 1),
		new Bishop(7, 5, 1),
		new Knight(7, 6, 1),
		new Rook(7, 7, 1)
	]
];

export default startingBoard;
