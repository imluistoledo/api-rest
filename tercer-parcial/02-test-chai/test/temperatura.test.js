// test/temperatura.test.js

import { expect } from 'chai'  // Importación estática de chai
import { celsiusAFahrenheit } from '../modules/temperatura.js'  // Importación estática del módulo temperatura

describe('Módulo de conversión de temperatura', () => {
    
    it('debería convertir correctamente Celsius a Fahrenheit', () => {
        expect(celsiusAFahrenheit(0)).to.equal(32)
        expect(celsiusAFahrenheit(100)).to.equal(212)
        expect(celsiusAFahrenheit(-40)).to.equal(-40)
    })
})
