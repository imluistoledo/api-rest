// circulo.js

/**
 * Calcula el área de un círculo dado su radio.
 * La fórmula para calcular el área es: área = π * radio^2.
 * 
 * @param {number} radio - El radio del círculo.
 * @returns {number} - El área del círculo.
 * @throws {Error} - Si el radio no es un número positivo.
 */
const areaCirculo = (radio) => {
    if (typeof radio !== 'number' || radio <= 0) {
        throw new Error("El radio debe ser un número positivo")
    }
    return Math.PI * Math.pow(radio, 2)
}

export { areaCirculo }  // Exportación usando ESM
