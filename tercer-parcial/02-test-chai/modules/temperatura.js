// temperatura.js

/**
 * Convierte una temperatura de grados Celsius a grados Fahrenheit.
 * @param {number} celsius - La temperatura en grados Celsius.
 * @returns {number} - La temperatura convertida a grados Fahrenheit.
 */
const celsiusAFahrenheit = (celsius) => {
    if (typeof celsius !== 'number') {
        throw new Error('El valor debe ser un número')
    }
    return (celsius * 9/5) + 32
}

export { celsiusAFahrenheit }
