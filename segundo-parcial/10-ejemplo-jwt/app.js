const jwt = require('jsonwebtoken');

// Clave secreta
const secretKey = 'miClaveSecreta';

// Generar JWT
function generarToken() {
    const payload = {
        id: 1,
        nombre: 'UsuarioEjemplo',
        rol: 'admin'
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    console.log('Token generado:', token);
    return token;
}

// Verificar JWT
function verificarToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Token válido:', decoded);
    } catch (error) {
        console.log('Token inválido:', error.message);
    }
}

const token = generarToken();
verificarToken(token);
