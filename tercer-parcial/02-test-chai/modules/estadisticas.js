// estadisticas.js

/**
 * Encuentra el valor máximo en un arreglo de números.
 * @param {number[]} arreglo - El arreglo de números.
 * @returns {number} - El valor máximo del arreglo.
 * @throws {Error} - Si el arreglo está vacío.
 */
const maximo = (arreglo) => {
    if (arreglo.length === 0) {
        throw new Error("El arreglo no puede estar vacío")
    }
    return Math.max(...arreglo)
}

export { maximo }
