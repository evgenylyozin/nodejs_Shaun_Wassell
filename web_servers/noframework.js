import http from 'http'

const server = http.createServer((req, res) => {
  console.log('Request received!')
  const { url } = req
  if (url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/html' } )
    res.write('Hello test!', (err) => {
      console.log(err)
    })
  }

  if (url === '/test2') {
    res.writeHead(200, { 'Content-Type': 'text/html' } )
    res.write('Hello test2!', (err) => {
      console.log(err)
    })
  }
  
  res.end()
})

server.listen(3000, () => {
  console.log('Server is up, listening on 3000')
})