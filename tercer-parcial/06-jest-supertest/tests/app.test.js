// app.test.js
const request = require('supertest')
const app = require('../app')

describe('API Endpoints', () => {
    it('should return a greeting message on GET /api/greet', async () => {
        const response = await request(app).get('/api/greet')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'Hello, world!' })
    })

    it('should echo the message on POST /api/echo', async () => {
        const response = await request(app)
            .post('/api/echo')
            .send({ message: 'Hello, Jest!' })
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'Hello, Jest!' })
    })

    it('should return a 400 error if no message is provided on POST /api/echo', async () => {
        const response = await request(app).post('/api/echo').send({})
        expect(response.status).toBe(400)
        expect(response.body).toEqual({ error: 'No message provided' })
    })
})
