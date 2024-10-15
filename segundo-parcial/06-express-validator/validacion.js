// validate.js
const { validationResult } = require('express-validator')

// Función middleware para manejar los errores de validación
const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next({ // Pasa los errores a la función manejadora de errores
            status: 400,
            message: 'Errores de validación',
            errors: errors.array()
        })
    }
    next()
}

module.exports = validate