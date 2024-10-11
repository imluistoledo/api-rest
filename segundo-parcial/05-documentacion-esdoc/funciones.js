/**
 * Calcula el cuadrado de un número.
 * @param {number} number - El número a ser elevado al cuadrado.
 * @returns {number} El cuadrado del número dado.
 */
export function square (number) {
    return number === 0 ? 1 : number * number
}

/**
 * Calcula el cubo de un número.
 * @param {number} number - El número a ser elevado al cubo.
 * @returns {number} El cubo del número dado.
 */
export function cube (number) {
    return number === 0 ? 0 : number ** 3
}

/**
 * Calcula el area de un circulo.
 * @param {number} radius - El radio del circulo.
 * @returns {number} El area de un circulo con el radio pasado.
 */
export function circle (radius) {
    return Math.PI * (radius**2)
}