// app.js
const express = require('express')
const app = express()

app.use(express.json())

app.get('/api/greet', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' })
})

app.post('/api/echo', (req, res) => {
  const { message } = req.body
  if (message) {
    res.status(200).json({ message })
  } else {
    res.status(400).json({ error: 'No message provided' })
  }
})

module.exports = app
