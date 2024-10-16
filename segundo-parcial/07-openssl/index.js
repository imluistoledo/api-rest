const express = require('express')
const { registerValidationRules } = require('./reglasValidacion')
const validate = require('./validacion')
const port = 443
const path = require('path')
// HTTPS
const https = require('https')
const fs = require('fs')

const app = express()
app.use(express.json()) // Para manejar datos en formato JSON

// Cargar los archivos de certificados
const options = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
}

// Ruta de registro
app.post('/registrar',
    registerValidationRules(), // Reglas de validación y sanitización
    validate, // Middleware de validación
    (req, res) => {
        // Aquí puedes acceder a los datos ya validados y sanitizados
        const { username, email, password } = req.body

        // Lógica si no hay errores
        res.send(`Usuario registrado con éxito: ${username}, ${email}`)
    }
)

// Función manejadora de errores
app.use((err, req, res, next) => {
    const statusCode = err.status || 500
    res.status(statusCode).json({
        message: err.message || 'Error interno del servidor',
        errors: err.errors || []
    })
})

// Crear el servidor HTTPS
https.createServer(options, app).listen(443, () => {
    console.log(`Servidor HTTPS en el puerto ${port}`)
})

// Redirigir HTTP a HTTPS
const http = require('http')
const portHttp = 80
http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` })
    res.end()
}).listen(portHttp, () => {
    console.log(`Redirigiendo tráfico HTTP a HTTPS en el puerto ${portHttp}`)
})