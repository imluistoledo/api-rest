const express = require('express')
const app = express()
const port = 3000
// const func = require('./funciones')
import square from './funciones.js'
import cube from './funciones.js'
import circle from './funciones.js'

app.get('/square/:number', (req, res) => {
    const number = parseInt(req.params.number)
    const result = square(number)
    res.send(`El cuadrado de ${number} es ${result}`)
})

app.get('/square/:cube', (req, res) => {
    const number = parseInt(req.params.number)
    const result = cube(number)
    res.send(`El cubo de ${number} es ${result}`)
})

app.get('/square/:circle', (req, res) => {
    const number = parseInt(req.params.radius)
    const result = circle(radius)
    res.send(`El area del circulo con radio de ${number} es ${result}`)
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})