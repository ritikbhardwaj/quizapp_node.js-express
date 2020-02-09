const mysql = require('mysql2')

/*Promise wrapper for mysql2 */
module.exports = class Database {
	constructor(config) {
		this.connection = mysql.createConnection(config)
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err)
					return reject(err)
				resolve(rows)
			})
		})
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err)
					return reject(err)
				resolve()
			})
		})
	}
}