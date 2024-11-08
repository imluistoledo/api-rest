// validador.js

/**
 * Valida si un correo electrónico tiene un formato correcto.
 * El formato básico del correo es: algo@dominio.com.
 * 
 * @param {string} correo - El correo electrónico a validar.
 * @returns {boolean} - Retorna true si el correo es válido, false si no lo es.
 */
const esCorreoValido = (correo) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
}

export { esCorreoValido }  // Exportación usando ESM
