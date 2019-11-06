"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// @ts-ignore
//import response from './network/response';
const routes_1 = __importDefault(require("./src/routes/routes"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.text());
app.use('/test', routes_1.default);
app.use('*', (req, res) => {
    res.status(500).send({
        data: '',
        error: ['internal_server_error'],
    });
});
/*
app.use('*', function (req, res) {
    response.error(req, res, 'internal_server_error', 500);
});

router.get('/test', function (req, res) {
    try {
        console.log(req.query);
        var array = JSON.parse(req.query.array);
        if (Array.isArray(array)) {
            response.success(req, res, array, 200);
        } else {
            response.error(req, res, 'invalid_data_format', 422);
        }
    } catch (e) {
        response.error(req, res, 'invalid_data_format', 422);
        console.log(e);
    }
});

router.post('/test', function (req, res) {
    try {
        var array = JSON.parse(req.body);
        if (Array.isArray(array)) {
            response.success(req, res, array, 200);
        } else {
            response.error(req, res, 'invalid_data_format', 422);
        }
    } catch (e) {
        response.error(req, res, 'invalid_data_format', 422);
        console.log(e);
    }
});
module.exports = app;

app.listen(4000);
console.log('aplicacion enable => http://localhost:4000');



*/
console.log('aplicacion enable => http://localhost:4000');
app.listen(4000);
