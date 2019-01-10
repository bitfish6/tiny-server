const http = require('http')

const server = http.createServer((request, response) => {
  response.end('hello world')
})

server.listen(8088,'localhost', (err) => {
  if(err) console.log(err)

  console.log('it is running')
})