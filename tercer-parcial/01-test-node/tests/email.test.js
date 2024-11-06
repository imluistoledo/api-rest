const { esCorreoValido } = require('../modules/email')

test('Valida un correo electronico correcto', () => {
    expect(esCorreoValido("correo@ejemplo.com")).toBe(true)
})

test('Rechaza un correo electronico incorrecto', () => {
    expect(esCorreoValido("correo@ejemplo")).toBe(false)
    expect(esCorreoValido("correo.com")).toBe(false)
})