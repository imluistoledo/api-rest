const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Importamos la aplicación de Express

const { expect } = chai;
chai.use(chaiHttp);

describe('API Users', () => {
    // Prueba para la ruta GET /users
    it('debería obtener una lista de usuarios', (done) => {
        chai
            .request(app)
            .get('/users') // Ruta que queremos probar
            .end((err, res) => {
                expect(res).to.have.status(200); // Comprobamos que el estado sea 200
                expect(res.body).to.be.an('array'); // Comprobamos que el cuerpo sea un array
                expect(res.body.length).to.be.equal(2); // Comprobamos que tenga 2 usuarios
                expect(res.body[0]).to.have.property('name'); // Comprobamos que cada usuario tenga el campo 'name'
                done();
            });
    });
});
