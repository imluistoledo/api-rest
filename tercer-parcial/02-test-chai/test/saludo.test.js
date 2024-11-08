// test/saludo.test.js

import { expect } from 'chai'  // Importación estática de chai
import { saludar } from '../modules/saludo.js'  // Importación estática del módulo saludo

describe('Módulo saludo', () => {

    it('debería saludar correctamente a una persona', () => {
        const resultado = saludar('Juan')
        expect(resultado).to.equal('Hola, Juan!')
    })

    it('debería saludar correctamente a otra persona', () => {
        const resultado = saludar('María')
        expect(resultado).to.equal('Hola, María!')
    })

    it('debería saludar correctamente a una persona con nombre corto', () => {
        const resultado = saludar('Ana')
        expect(resultado).to.equal('Hola, Ana!')
    })

    it('debería saludar correctamente a una persona con nombre largo', () => {
        const resultado = saludar('Alejandro')
        expect(resultado).to.equal('Hola, Alejandro!')
    })
})
