const request = require('supertest');

const app = require('../index');

describe('prueba server', () => {
    test('responder a el metodo GET',done=>{
        request(app).get('/test?array=[4,5,6,7,8]').then((response) => {
            expect(response.statusCode.toBe(200));
            done();
        });
    });
});
