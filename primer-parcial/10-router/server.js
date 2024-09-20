const express = require('express')
const app = express()
const port = 3000

// Importacion del enrutador
const filmRoutes = require('./film')

// Uso del enrutador
app.use('/', filmRoutes)

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})