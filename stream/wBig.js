const fs = require('fs')

let wirteStream = fs.createWriteStream('./big.txt')
for(var i=0; i<1e5; i++){
    wirteStream.write('hello world')
}