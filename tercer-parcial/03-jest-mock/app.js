const express = require('express')
const mimodulo = require('./modules/saludo') // Importa el módulo saludo

const app = express()
const port = 3000

// Configura una ruta que utilice tu módulo
app.get('/saludar/:nombre', (req, res) => {
    const nombre = req.params.nombre
    const saludo = mimodulo.saludar(nombre) // Llama a la función del módulo
    res.send(saludo)
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})