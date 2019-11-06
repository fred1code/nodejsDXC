const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
//const response = require('./metodos/metodo.ts');

const router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(bodyParser.text());
//app.use(bodyParser.raw());
app.use(router);

app.use('*', function(req, res){
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


app.use('/app', express.static('public'));


app.listen(4000);
console.log('aplicacion enable => http://localhost:3000');



