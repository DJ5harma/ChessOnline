import sql from '../../../../mysql/connection.js';

export async function POST(event) {
	console.log(await event.request.json());
	sql.query('');
	return new Response('Worked');
}
