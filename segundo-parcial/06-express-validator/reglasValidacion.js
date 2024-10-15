// validationRules.js
const { body } = require('express-validator')

// Definir reglas de validación
const registerValidationRules = () => {
    return [
        body('username').isLength({ min: 5 }).isAlphanumeric().withMessage('El nombre de usuario debe tener al menos 5 caracteres y ser alfanumérico'),
        body('email').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
        body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    ]
}

module.exports = {
    registerValidationRules
}