import dotenv from 'dotenv';
dotenv.config();

const {
	// sql
	SQL_HOST,
	SQL_USER,
	SQL_PASSWORD,
	SQL_DATABASE,

	// node
	CRYPTO_ENCRYPTION_KEY
} = process.env;

export { SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE, CRYPTO_ENCRYPTION_KEY };
