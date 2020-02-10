const 	csv = require('csv-parser'),
		fs = require('fs'),
		sql = require('../database'),
		path = 'test-info/users.csv'

let results = []
fs.createReadStream(path)
	.pipe(csv(['rollNumber', 'name']))
	.on('data', (data) => results.push(data))
	.on('end', () => {
		console.log(`CSV file (${path}) loaded!`)
	})


function returnQuery(rows){
	let string = 'INSERT INTO users(rollNumber,name,createdAt) VALUES'
	rows.forEach(row => {
		string += `(${row.rollNumber},"${row.name}",CURDATE()),`
	});
	string += ';'
	return string
}


// console.log(returnQuery(rows))
//empty the table
// sql.query('DELETE FROM users WHERE 1=1')
// .then(()=>{
	
// })