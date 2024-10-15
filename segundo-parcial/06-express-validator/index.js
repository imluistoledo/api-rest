const express = require('express')
const { registerValidationRules } = require('./reglasValidacion')
const validate = require('./validacion')

const app = express()
app.use(express.json()) // Para manejar datos en formato JSON

// Ruta de registro
app.post('/registrar',
    registerValidationRules(), // Reglas de validación
    validate, // Middleware de validación
    (req, res) => {
        // Lógica si no hay errores
        res.send('Usuario registrado con éxito')
    }
)

// Función manejadora de errores
app.use((err, req, res, next) => {
    // Si el error tiene un estado (por ejemplo, errores de validación)
    const statusCode = err.status || 500 // 500 es un error de servidor por defecto
    res.status(statusCode).json({
        message: err.message || 'Error interno del servidor',
        errors: err.errors || []
    })
})

// Servidor corriendo
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})
