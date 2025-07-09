const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('Return Hello, World', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World');
    });
});