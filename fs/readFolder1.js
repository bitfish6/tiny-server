const fs = require('fs')
const path = require('path')
let folderName = '.'

fs.readdir(folderName,(err,files)=>{
    if (err) throw err;

    files.forEach((fileName)=>{
        fs.stat(path.join(folderName,fileName),
            (err, stat) => {
                if (stat.isDirectory()) {
                    console.log( fileName + ': it is a folder')
                  }else if(stat.isFile()){
                    console.log( fileName + 'it is a file')
                }
        })
    })
})