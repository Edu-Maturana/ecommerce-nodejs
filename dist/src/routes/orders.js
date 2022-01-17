"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const express_validator_1 = require("express-validator");
const payment_1 = require("../helpers/payment");
const router = Router();
router.post("/payment", [
    (0, express_validator_1.check)("products", "products must be an array").isArray({ min: 1, max: 10 }),
    (0, express_validator_1.check)("total", "total must be a number").isNumeric(),
], payment_1.createPaymentIntent);
exports.default = router;
//# sourceMappingURL=orders.js.map