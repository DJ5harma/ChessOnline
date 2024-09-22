import type { IongoingGame, IonlineUser } from '../../utils/types';
import { io } from './initialize';

const ongoingGames = new Map<string, IongoingGame>();

export function startNewGame(tempKey: string, player1: IonlineUser, player2: IonlineUser) {}
