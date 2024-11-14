const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

const { expect } = chai
chai.use(chaiHttp)

describe('API Users', () => {
    // Prueba para la ruta GET /users
    it('debería obtener una lista de usuarios', (done) => {
        chai
            .request(app)
            .get('/users')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('array')
                expect(res.body.length).to.be.equal(2)
                expect(res.body[0]).to.have.property('name')
                done()
            })
    })
})
