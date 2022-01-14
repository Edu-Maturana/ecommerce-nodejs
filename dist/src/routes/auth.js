"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const dbValidators_1 = require("../middlewares/dbValidators");
const router = (0, express_1.Router)();
router.post("/signup", [
    (0, express_validator_1.check)("name", "Name is required").not().isEmpty(),
    (0, express_validator_1.check)("email", "Email is required").isEmail(),
    (0, express_validator_1.check)("password", "Password is required - Min length is 8").isLength({ min: 8 }),
    dbValidators_1.userExists,
    validateFields_1.default
], auth_1.signUp);
exports.default = router;
//# sourceMappingURL=auth.js.map