"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_1 = require("../controllers/users");
const validateJWT_1 = __importDefault(require("../helpers/validateJWT"));
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const router = (0, express_1.Router)();
router.put("/address", [
    validateJWT_1.default,
    (0, express_validator_1.check)("address", "Address is required").not().isEmpty(),
    validateFields_1.default,
], users_1.EditAddress);
router.get("/", [
    validateJWT_1.default,
], users_1.getUser);
exports.default = router;
//# sourceMappingURL=users.js.map