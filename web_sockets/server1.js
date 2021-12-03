import express from "express"
import http from 'http'
import { Server } from 'socket.io'

const app = express()

const server = http.createServer(app)

const io = new Server(server)

io.on('connection', socket => {
  console.log(`Connected to ${socket.client.id}`)

  socket.on('newNumber', data => {
    console.log(data)
})

  socket.on('disconnect', () => {
    console.log(`Disconnected from ${socket.client.id}`)
  })

})

server.listen(8000, () => {
  console.log('Waiting for connections on port 8000')
})