"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helmet_1 = __importDefault(require("helmet"));
// @ts-ignore
//import {Responses} from "../network/response";
const response = require("../network/response");
const router = express_1.Router();
//const response = Responses;
router.use(helmet_1.default());
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
