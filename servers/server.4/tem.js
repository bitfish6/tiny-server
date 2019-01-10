function tem(filesName){
  var str = ''
  for( var name of filesName){
    str += `<li><a href="#">${name}</a></li>`
  }
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <ul>
      ${str}
    </ul>
  </body>
  </html>`
}
module.exports = tem