const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sufiyan', (req, res) => {
    res.send('Hello Sufiyan!')
  })

app.post('/world', (req, res) => {
    res.send('Hello World POST!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})