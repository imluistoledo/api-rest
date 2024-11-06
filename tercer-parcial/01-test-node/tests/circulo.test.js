const { areaCirculo } = require('../modules/circulo')

test('Calcula el area de un circulo con radio positivo', () => {
    expect(areaCirculo(2)).toBeCloseTo(12.5664, 4) // precisión de 4 decimales
})

test('Lanza un error cuando el radio es negativo', () => {
    expect(() => areaCirculo(-2)).toThrow("El radio debe ser positivo")
})
