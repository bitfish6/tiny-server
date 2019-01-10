const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.method)
  console.log(request.url)
  console.log(request.headers)
  console.log(request.body)
  
  //....

  response.statusCode = 200
  response.setHeader('server', 'nodejs')
  response.write('url: ' + request.url)
  // response.setHeader('Content-Type','text/html')
  // response.write()
  response.end()
})

server.listen(8089,'localhost', (err) => {
  if(err) console.log(err)

  console.log('it is running')
})