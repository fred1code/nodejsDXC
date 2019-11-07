import express, {Router, urlencoded} from 'express';
import bodyParser from 'body-parser';

// @ts-ignore
//import response from './network/response';
import router from './src/routes/routes';



const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use('/test', router);

app.use('*', (req, res) => {
    res.status(500).send({
        data: '',
        error: ['internal_server_error'],
    });
});

console.log('aplicacion enable => http://localhost:4000');
app.listen(4000);
