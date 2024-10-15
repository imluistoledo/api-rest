const { body } = require('express-validator')

// Definir reglas de validación y sanitización
const registerValidationRules = () => {
    return [
        // Validación del nombre de usuario
        body('username')
            .trim() // Eliminar espacios en blanco al principio y al final
            .escape() // Escapar caracteres especiales como <, >, &, etc.
            .isLength({ min: 5 }).withMessage('El nombre de usuario debe tener al menos 5 caracteres'),

        // Validación del email
        body('email')
            .trim()
            .normalizeEmail() // Normalizar el correo (por ejemplo, convertir todo a minúsculas)
            .isEmail().withMessage('Debe proporcionar un correo electrónico válido'),

        // Validación de la contraseña
        body('password')
            .trim() // Eliminar espacios en blanco al principio y al final
            .escape() // Escapar caracteres especiales para prevenir inyecciones
            .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    ]
}

module.exports = {
    registerValidationRules
}
