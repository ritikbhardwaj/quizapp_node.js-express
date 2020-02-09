const   csv = require('csv-parser'),
        fs = require('fs')

var results = []

fs.createReadStream('utils/test-info/questions.csv')
    .pipe(csv(['qid','qtext','op1','op2','op3','op4','answer']))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log('Csv file read complete!')
    });
module.exports = results;
