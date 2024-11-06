// email.js
function esCorreoValido(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(correo)
}

module.exports = { 
    esCorreoValido 
}
