const http = require('http');
const fs= require('fs');
const path = require('path');
const promisify = require('util').promisify;
const mime = require('mime-types')
const tem = require('./tem.js')
const read = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
const stats = promisify(fs.stat);


var port = process.argv[3] || 9090;
var host = 'localhost';

var rootDir = process.argv[2] ?
    path.join(process.env.PWD, process.argv[2]) 
     : process.env.PWD;

const server = http.createServer(async (req, res) => {
  var filePath = path.join(rootDir,req.url);
  try{
    var stat = await stats(filePath)
    if(stat.isFile()){
      var type = mime.contentType(path.extname(filePath))
      res.setHeader('Content-Type', type)
      let readStream = fs.createReadStream(filePath)
      readStream.pipe(res)
    } else if(stat.isDirectory()) {
      let filesName = await readDir(filePath)
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(tem(filesName))
    } 
  }catch (error){
    res.statusCode = 404
    console.log(error)
    res.end('can not find resource')
  }
});


server.listen(port, host, err => {
  if(err){
    console.log(err)
  } else {
    console.log(`server is listen 
        http://${host}:${port}`)
  }
})

