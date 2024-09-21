import { createConnection } from 'mysql2/promise';

const { host, user, password, database } = import.meta.env;

const sql = await createConnection({
	host,
	user,
	database,
	password
});
export default sql;
