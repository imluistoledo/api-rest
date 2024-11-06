const mimodulo = require('../modules/saludo')

test('Deberia devolver un saludo con el nombre', () => {
    expect(mimodulo.saludar('Juan')).toBe('Hola, Juan!')
});
