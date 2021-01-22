const supertest = require('supertest')
const {api} = require('../../src/core/express')
const request = supertest(api)
describe('API Index', () => {
    it('should respond with 200 status', async () => {
        const res = await request.get('/')
        expect(res.status).toBe(200)
    })
    it('should respond with 404 status', async function () {
        const res = await request.get('/something')
        expect(res.status).toBe(404)
    });
})