import Box from './Box';

export default class Piece extends Box {
	color: 0 | 1;
	constructor(row: number, col: number, color: 0 | 1) {
		super(row, col);
		this.color = color;
	}
}
