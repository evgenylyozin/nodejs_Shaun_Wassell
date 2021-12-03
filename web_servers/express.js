import express from "express"

const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log('Express is listening on port 3000!')
})

app.get('/', (req, res) => {
  console.log('The request is ', req)
  res.send('Hello from express!')
})

app.get('/about', (req, res) => {
  res.send('Hello from about page!')
})

app.get('/params/:id', (req, res) => {
  const id = req.params.id
  res.send(`Hello from params page! The id param is ${id}`)
})

app.post('/post', (req, res) => {
  const payload = req.body
  res.send(`Hello from post page! The request payload is ${JSON.stringify(payload)}`)
})