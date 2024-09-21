import crypto from 'crypto';
import { CRYPTO_ENCRYPTION_KEY } from './env';

const algorithm = 'aes-128-cbc';
const open = 'utf8';
const hidden = 'hex';

// Encrypt function
export function encryptPassword(password: string): string {
	const IV = crypto.randomBytes(16); // Initialization vector

	const cipher = crypto.createCipheriv(algorithm, Buffer.from(CRYPTO_ENCRYPTION_KEY!), IV);

	let encrypted = cipher.update(password, open, hidden);
	encrypted += cipher.final(hidden);

	// Prepend IV to encrypted data
	return IV.toString(hidden) + ':' + encrypted;
}

// Decrypt function
export function decryptPassword(encryptedPassword: string): string {
	// Split IV and encrypted data
	const parts = encryptedPassword.split(':');
	const IV = Buffer.from(parts[0], hidden);
	const encryptedText = parts[1];

	const decipher = crypto.createDecipheriv(algorithm, Buffer.from(CRYPTO_ENCRYPTION_KEY!), IV);

	let decrypted = decipher.update(encryptedText, hidden, open);
	decrypted += decipher.final(open);

	return decrypted;
}
