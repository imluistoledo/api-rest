const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const userRoutes = require('./routes/user')

const app = express()
app.use(express.json())

// Configuración de swagger-jsdoc
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de ejemplo con Swagger',
            version: '1.0.0',
            description: 'Ejemplo básico de API documentada con Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
    },
    apis: [__dirname + '/routes/*.js'], // Ubicación de las anotaciones Swagger
}

// Generación de especificaciones OpenAPI
const swaggerDocs = swaggerJsdoc(swaggerOptions)

// Rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)) // Documentación Swagger
app.use('/users', userRoutes) // Rutas de usuarios

// Inicio del servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
    console.log(`Documentación en http://localhost:${PORT}/api-docs`)
})
