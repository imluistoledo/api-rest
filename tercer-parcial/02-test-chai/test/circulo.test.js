import { expect } from 'chai'
import { areaCirculo } from '../modules/circulo.js'  // Cambia a import

describe('Módulo de área de un círculo', () => {
    it('debería calcular correctamente el área de un círculo', () => {
        const radio = 3
        const resultadoEsperado = Math.PI * Math.pow(radio, 2)
        expect(areaCirculo(radio)).to.equal(resultadoEsperado)
    })

    it('debería lanzar un error si el radio no es un número positivo', () => {
        expect(() => areaCirculo(-1)).to.throw('El radio debe ser un número positivo')
        expect(() => areaCirculo('string')).to.throw('El radio debe ser un número positivo')
        expect(() => areaCirculo(0)).to.throw('El radio debe ser un número positivo')
    })

    it('debería calcular el área con radio 1', () => {
        const radio = 1
        const resultadoEsperado = Math.PI * Math.pow(radio, 2)
        expect(areaCirculo(radio)).to.equal(resultadoEsperado)
    })
})
