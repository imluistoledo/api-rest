/**
 * Calcula el cuadrado de un número.
 * @param {number} number - El número a ser elevado al cuadrado.
 * @returns {number} El cuadrado del número dado.
 */
const square = (number) => {
    return number === 0 ? 1 : number * number
}

/**
 * Calcula el cubo de un número.
 * @param {number} number - El número a ser elevado al cubo.
 * @returns {number} El cubo del número dado.
 */
const cube = (number) => {
    return number === 0 ? 0 : number ** 3
}

/**
 * Calcula el area de un circulo.
 * @param {number} radius - El radio del circulo.
 * @returns {number} El area de un circulo con el radio pasado.
 */
const circle = (radius) => {
    return Math.pi * (radius**2)
}

module.exports = {
    square,
    cube,
    circle
}