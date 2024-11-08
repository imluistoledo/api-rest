import { expect } from 'chai'  // Importación estática de chai
import { maximo } from '../modules/estadisticas.js'  // Importación estática del módulo estadisticas

describe('Módulo de estadística', () => {

    it('debería encontrar el valor máximo en un arreglo de números', () => {
        expect(maximo([1, 2, 3, 10, 5])).to.equal(10)
    })

    it('debería lanzar un error si el arreglo está vacío', () => {
        expect(() => maximo([])).to.throw("El arreglo no puede estar vacío")
    })
})
