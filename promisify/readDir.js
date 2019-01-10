const fs = require('fs');
const promisify = require('util').promisify;
const path = require('path')

const read = promisify(fs.readFile);
const stats = promisify(fs.stat);
const readDir = promisify(fs.readdir);

let folderName = '../';

(async function(){
  try{
    let filesName = await readDir(folderName) 
    for(let name of filesName) {
      let stat = await stats(path.join(folderName, name))
      if(stat.isDirectory()){
        console.log(name + ': is folder')
      } else {
        console.log(name + ' : is file')
      }
    }
  } catch (err) {
    console.log(err)
  }
})()
