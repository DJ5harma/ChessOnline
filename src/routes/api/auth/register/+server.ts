// import sql from '../../../../mysql/connection.js';

import sql from '../../../../mysql/connection';
import { decryptPassword, encryptPassword } from '../../../../utils/encrypt_decrypt';

export async function POST(e) {
	const { Username, Password, ConfirmPassword } = await e.request.json();
	const enc = encryptPassword(Password);

	console.log(enc);
	console.log(decryptPassword(enc));

	try {
		if ((Password as string).length < 8) throw new Error('Password less than 8 chars');
		if (ConfirmPassword !== Password) throw new Error("Confirmed Password doesn't match");
		await sql.query(`
			INSERT INTO TABLE
			(Username, EncryptedPassword)
			VALUES
			${Username}, ${encryptPassword(Password)}
		`);
	} catch (error: unknown) {
		return new Response(JSON.stringify({ error: (error as Error).message }));
	}
}
