import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      // Accumulate the incoming data chunks
      body += chunk.toString()
    })

    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') {
        // Parse the body as JSON if the content-type is JSON
        body = JSON.parse(body)
      }

      console.log(body)

      // Respond with a status code 201 (Created)
      res.writeHead(201)
      res.end('ok')
    })
  } else {
    // Respond with a status code 200 (OK) and a message
    res.writeHead(200)
    res.end('hello from my server')
  }
})

// Start the server and listen on the specified host and port
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
