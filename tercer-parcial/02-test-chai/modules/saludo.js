// saludo.js

/**
 * Genera un saludo personalizado con el nombre proporcionado.
 * 
 * @param {string} nombre - El nombre de la persona a saludar.
 * @returns {string} - El saludo personalizado, por ejemplo: "Hola, Juan!".
 * @throws {Error} - Si el nombre no es una cadena de texto.
 */
const saludar = (nombre) => {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error("El nombre debe ser una cadena de texto no vacía");
    }
    return `Hola, ${nombre}!`;
}

export { saludar }
