"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// @ts-ignore
//import {Responses} from "../network/response";
const response = require("../network/response");
const router = express_1.Router();
//const response = Responses;
router.get('/', (req, res) => {
    try {
        const array = JSON.parse(req.query.array);
        if (Array.isArray(array)) {
            response.success(req, res, array, 200);
        }
        else {
            response.error(req, res, 'invalid_data_format', 422);
        }
    }
    catch (e) {
        response.error(req, res, 'invalid_data_format', 422);
        console.log(e);
    }
});
router.post('/', (req, res) => {
    try {
        const array = JSON.parse(req.body);
        if (Array.isArray(array)) {
            response.success(req, res, array, 200);
        }
        else {
            response.error(req, res, 'invalid_data_format', 422);
        }
    }
    catch (e) {
        response.error(req, res, 'invalid_data_format', 422);
        console.log(e);
    }
});
exports.default = router;
