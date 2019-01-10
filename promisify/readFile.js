const fs = require('fs')
const promisify = require('util').promisify

const read = promisify(fs.readFile)

let fileName = './readFile.js'
read(fileName, 'utf8')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })