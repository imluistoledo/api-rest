const express = require('express')
const { registerValidationRules } = require('./reglasValidacion')
const validate = require('./validacion')

const app = express()
app.use(express.json()) // Para manejar datos en formato JSON

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

// Servidor corriendo
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})
