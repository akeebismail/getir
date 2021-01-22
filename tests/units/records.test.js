const supertest = require('supertest')
const {api} = require('../../src/core/express')
const request = supertest(api)

describe('POST /data', () => {
    test('should respond with 422 for invalid payload', async () => {
        const res = await request.post('/data').send({
            startDate: '2012-01'
        })
        expect(res.status).toBe(422)
    })
    test('should respond with 200', async () => {
        const res = await request.post('/data').send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        })
        expect(res.status).toBe(200)
    })
})