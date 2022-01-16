"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const brands_1 = require("../controllers/brands");
const validateJWT_1 = __importDefault(require("../helpers/validateJWT"));
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const dbValidators_1 = require("../middlewares/dbValidators");
const router = (0, express_1.Router)();
router.post("/", [
    validateJWT_1.default,
    dbValidators_1.isAdmin,
    (0, express_validator_1.check)("name", "Name is required").not().isEmpty(),
    validateFields_1.default,
], brands_1.createBrand);
router.get("/", brands_1.getBrands);
router.put("/:id", [
    validateJWT_1.default,
    dbValidators_1.isAdmin,
    (0, express_validator_1.check)("name", "Name is required").not().isEmpty(),
    validateFields_1.default,
], brands_1.editBrand);
exports.default = router;
//# sourceMappingURL=brands.js.map