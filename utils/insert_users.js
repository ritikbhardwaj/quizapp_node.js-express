const csvFilePath = 'utils/test-info/users.csv'
const csv = require('csvtojson')
const sql = require('../database')

let string = 'INSERT INTO users(rollNumber,name,createdAt) VALUES'
csv()
	.fromFile(csvFilePath)
	.then((rows) => {
		//empty the table
		sql.query('DELETE FROM users WHERE 1=1')
			.then(() => {
				return sql.query(returnQuery(rows))
			}).then((result)=>{
				console.log(result)
			})
	})
function returnQuery(rows){
	for(let i =0; i<rows.length; i++){
		string += `(${rows[i].rollNumber},"${rows[i].name}",CURDATE())`
		if(i == rows.length-1){
			string += ';'
		}else{
			string += ','
		}
	}
	return string
}

