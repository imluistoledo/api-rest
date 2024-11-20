const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const userRoutes = require('./routes/user')

const app = express()
app.use(express.json())

// Importar la configuración desde el archivo JSON
const swaggerConfig = require('./config/swagger.json')

// Configuración de swagger-jsdoc usando la configuración importada
const swaggerOptions = {
    definition: swaggerConfig, // Pasar la configuración directamente
    apis: [__dirname + '/routes/*.js'] // Ubicación de las anotaciones Swagger
}

// Generación de especificaciones OpenAPI
const swaggerDocs = swaggerJsdoc(swaggerOptions)

// Rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)) // Documentación Swagger
app.use('/users', userRoutes) // Rutas de usuarios

// Nueva ruta para devolver las especificaciones en JSON
app.get('/spec', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerDocs)
})

// Inicio del servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
    console.log(`Documentación en http://localhost:${PORT}/api-docs`)
})