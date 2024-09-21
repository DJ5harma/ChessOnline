import type { Handle } from '@sveltejs/kit';
import initializeSocketServer from './socketio/server/initialize';

export const handle: Handle = async ({ event, resolve }) => {
	initializeSocketServer();
	return await resolve(event);
};
