import type { IonlineUserWithSocketID } from '../../utils/types';
import Game from '../../game/classes/Game';
import { io } from './initialize';

const ongoingGames = new Map<string, Game>();

export function startNewGame(
	tempKey: string,
	player1: IonlineUserWithSocketID,
	player2: IonlineUserWithSocketID
) {
	ongoingGames.set(tempKey, new Game(player1, player2));
}

io?.on('arrived at url', (url: string) => {
	const game = ongoingGames.get(url);
	const sId1 = game?.whitePlayer.socketId,
		sId2 = game?.blackPlayer.socketId;
	if (!sId1 || !sId2) return;
	//todo
	// io?.to([sId1, sId2]).emit()
});
