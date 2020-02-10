const   csv = require('csv-parser'),
        fs = require('fs'),
    path = 'utils/test-info/questions.csv'

    var results = []
    fs.createReadStream(path)
        .pipe(csv(['qid', 'qtext', 'op1', 'op2', 'op3', 'op4', 'answer']))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(`Csv file (${path}) read complete!`)
        });

module.exports = results;
