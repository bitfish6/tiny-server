const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

let fileName = './readFile.js';

(async function() {
  try{
    var data = await read(fileName,'utf-8')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
})();
