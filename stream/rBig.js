const fs = require('fs')
const path = require('path')

let fileName = './big.txt'
// let fileName = './README.md'

let readStream = fs.createReadStream(fileName)

readStream.on('data', chunk => {
  //console.log('getting data!!!')
  process.stdout.write(chunk)
})

readStream.on('end',()=>{
  console.log('end...')
})

readStream.pipe(process.stdout)