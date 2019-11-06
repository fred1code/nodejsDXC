//import { operaciones } from '../network/response';
const operaciones = require('../src/network/response');

const array = [4, 5, 6, 7, 8];

describe('calculos matematicos', () => {
    test('valores', () => {
        expect(operaciones(array)).toStrictEqual({
            suma: 30,
            resta: -22,
            multiplicacion: 6720,
            division: 0.0023809523809523807,
        });
    })
});
