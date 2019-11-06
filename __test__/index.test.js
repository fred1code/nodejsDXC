const request = require('supertest');
const app = require('../index');

describe('prueba server metodo get', () => {
    test('responder a el metodo GET', done => {
        request(app).get('/test?array=[4,5,6,7,8]').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('prueba server metodo get parametros mal', () => {
    test('responder a el metodo GET', done => {
        request(app).get('/test?array=[4,5,6,7,8').then((response) => {
            expect(response.statusCode).toBe(422);
            done();
        });
    });
});

describe('prueba server metodo get con error', () => {
    test('responder a el metodo GET', done => {
        request(app).get('/algo').then((response) => {
            expect(response.statusCode).toBe(500);
            done();
        });
    });
});


describe('prueba server metodo POST 200', () => {
    test('responder a el metodo post', done => {
        request(app).post('/test').type('text').send('[5,6,3,4,1]').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


describe('prueba server metodo POST 422', () => {
    test('responder a el metodo post', done => {
        request(app).post('/test').type('text').send('[5,6,3,4,1').then((response) => {
            expect(response.statusCode).toBe(422);
            done();
        });
    });
});


describe('prueba server metodo POST error 500', () => {
    test('responder a el metodo post', done => {
        request(app).post('/algo').type('text').send('[5,6,3,4,1]').then((response) => {
            expect(response.statusCode).toBe(500);
            done();
        });
    });
});
