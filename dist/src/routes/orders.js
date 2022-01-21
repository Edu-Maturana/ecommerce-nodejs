"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const express_validator_1 = require("express-validator");
const payment_1 = require("../helpers/payment");
const router = Router();
router.post("/payment", [
    (0, express_validator_1.check)("products", "products must be an array").isArray({ min: 1, max: 10 }),
    (0, express_validator_1.check)("total", "total must be a number").isNumeric(),
    (0, express_validator_1.check)("addressShipping", "addressShipping must be an object").isObject(),
    (0, express_validator_1.check)("userId", "userId must be a string").isString(),
], payment_1.createPayment);
exports.default = router;
//# sourceMappingURL=orders.js.map