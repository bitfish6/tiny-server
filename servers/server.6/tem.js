const fs= require('fs');
const promisify = require('util').promisify;
const path = require('path');
const stats = promisify(fs.stat);

module.exports =async function(filesNameArr, filePath) {
  var str = ''
  for (var name of filesNameArr) {
    var fullName = path.join(filePath,name)
    try{
      var stat = await stats(fullName)
      if (stat.isFile()){
        str += `<li><a href="./${name}">${name}</a></li>`
      } else if(stat.isDirectory()) {
        str += `<li><a href="./${name}/">${name}</a></li>`
      }
    } catch (err){
      console.log(err)
    }
  }
  return `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>folder</title>
  </head>
  <body>
    <ul>
      ${str}
    </ul>
  </body>
</html>`
}