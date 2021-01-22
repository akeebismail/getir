const supertest = require('supertest')
const {api} = require('../../src/core/express')
const request = supertest(api)

describe('POST /data', () => {
    test('should respond with 422 for invalid payload', async () => {
        const res = await request.post('/data').send({
            startDate: '2012-01'
        })
        expect(res.status).toBe(422)
        expect(res.body.code).toBe(422)
    })
    test('should respond with 200', async () => {
        const res = await request.post('/data').send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        })
        expect(res.status).toBe(200)
        expect(res.body.code).toEqual(200)
        expect(res.body.msg).toEqual('Success')
    })
    test('should response with 200 and proper response document', async () => {
        const res = await request.post('/data').send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        })
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('code')
        expect(res.body).toHaveProperty('msg')
        expect(res.body).toHaveProperty('records')
    })
    test('should response with totalCount', async () => {
        const res = await request.post('/data').send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        })
        expect(res.body.records[0]).toHaveProperty('key')
        expect(res.body.records[0]).toHaveProperty('totalCount')
        expect(res.body.records[0]).toHaveProperty('createdAt')
    })
})