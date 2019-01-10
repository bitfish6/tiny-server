const http = require('http');
const fs= require('fs');
const path = require('path');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
const stats = promisify(fs.stat);

var port = process.argv[3] || 9899;
var host = 'localhost'

var rootDir = process.argv[2] ? 
           path.join(process.env.PWD, process.argv[2]) :
           process.env.PWD;

const server = http.createServer(async (req, res) => {
  var filePath = path.join(rootDir,req.url);
  try{
    let stat = await stats(filePath)
    if(stat.isFile()){
      res.end('file')
    } else if(stat.isDirectory()){
      res.end('folder')
    }
  }catch (error){
    res.statusCode = 404
    res.end('can not find resorce')
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

