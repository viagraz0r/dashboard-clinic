import mysql from 'serverless-mysql';

export const conn = mysql({
	config: {
		host: 'localhost',
		user: 'root',
		password: 'root.123',
		port: 3306,
		database: 'nextmysqldashapp',
	},
});
