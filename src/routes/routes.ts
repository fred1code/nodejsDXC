import {Router} from 'express';
// @ts-ignore
//import {Responses} from "../network/response";
import response = require("../network/response");

const router: Router = Router();
//const response = Responses;


router.get('/', (req: any, res: any) => {
    try {
        const array = JSON.parse(req.query.array);
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

router.post('/', (req: any, res: any) => {
    try {
        const array = JSON.parse(req.body);
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

export default router;
