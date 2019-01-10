const fs = require('fs')

let name = '.'

fs.stat(name,(err,stat)=>{
  if(err) throw err
  
  if (stat.isDirectory()) {
    console.log('it is a folder')
  }else if(stat.isFile()){
    console.log('it is a file')
  }
})
