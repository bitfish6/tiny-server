const http = require('http');
const fs= require('fs');
const path = require('path');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
const stats = promisify(fs.stat);
const tem = require('./tem.js');
var mime = require('mime-types')

var port = 
var host = 

var rootDir = 

const server = http.createServer(async (req, res) => {
  var filePath = path.join(rootDir,req.url);
  try{

  }catch (error){
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

