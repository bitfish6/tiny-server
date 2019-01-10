const fs = require('fs')
const path = require('path')

let fileName = './README.md'

fs.readFile(fileName,'utf8', (err, data) => {
  if (err){
    console.log(err);
  }
  console.log(data);
});