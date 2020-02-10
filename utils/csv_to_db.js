const csvFilePath = 'utils/test-info/questions.csv'
const csv = require('csvtojson')

var results = []
csv()
    .fromFile(csvFilePath)
    .then((rows) => {
        console.log(`[+]CSV (${csvFilePath}) loaded!`)
        rows.forEach(row=>{
            results.push(row)
        })
    })

module.exports = results
