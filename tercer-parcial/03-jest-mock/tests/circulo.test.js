const calculateArea = require('../modules/circulo')
const getPi = require('../modules/valorPi')

// Hacemos mock del módulo piService
jest.mock('../modules/valorPi')

describe('calculateArea', () => {
    it('debería devolver el área correcta utilizando el valor de Pi mockeado', () => {
        // Definimos el valor de Pi que queremos que devuelva el mock
        getPi.mockReturnValue(3.14) // Mockeamos getPi para que devuelva 3.14

        const result = calculateArea(3) // Calculamos el área con el radio 3
        expect(result).toBeCloseTo(3.14 * 3 * 3, 2) // Esperamos que el área sea 3.14 * 9
    })

    it('debería lanzar un error si el radio es menor o igual a 0', () => {
        expect(() => calculateArea(0)).toThrow('El radio debe ser mayor que 0')
        expect(() => calculateArea(-1)).toThrow('El radio debe ser mayor que 0')
    })
})