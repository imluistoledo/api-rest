import { expect } from 'chai'  // Importación estática de chai
import { esCorreoValido } from '../modules/email.js'  // Importación estática del módulo email

describe('Módulo de validación de correos electrónicos', () => {

    it('debería validar un correo electrónico correcto', () => {
        expect(esCorreoValido("correo@ejemplo.com")).to.be.true
    })

    it('debería rechazar un correo electrónico incorrecto', () => {
        expect(esCorreoValido("correo@ejemplo")).to.be.false
        expect(esCorreoValido("correo.com")).to.be.false
    })
})
