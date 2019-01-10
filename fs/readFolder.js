const fs = require('fs')

let folderName = '.'

fs.readdir(folderName,(err,files)=>{
    if (err) throw err;

    console.log(files)
    files.forEach((fileName)=>{
        console.log(fileName)
    })
})