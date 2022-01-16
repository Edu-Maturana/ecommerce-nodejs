"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const products_1 = require("../controllers/products");
const dbValidators_1 = require("../middlewares/dbValidators");
const validateJWT_1 = __importDefault(require("../helpers/validateJWT"));
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const router = (0, express_1.Router)();
router.post("/", [
    validateJWT_1.default,
    dbValidators_1.isAdmin,
    (0, express_validator_1.check)("name", "Name is required").not().isEmpty(),
    (0, express_validator_1.check)("description", "Description is required").not().isEmpty(),
    (0, express_validator_1.check)("price", "Price is required").not().isEmpty().isNumeric(),
    (0, express_validator_1.check)("brand", "Brand is required").not().isEmpty(),
    dbValidators_1.brandExists,
    (0, express_validator_1.check)("image", "Image is required").not().isEmpty().isURL(),
    (0, express_validator_1.check)("video", "Video is required").not().isEmpty().isURL(),
    validateFields_1.default,
], products_1.createProduct);
router.get("/", products_1.getProducts);
router.get("/:id", products_1.getProduct);
router.put("/:id", [
    validateJWT_1.default,
    dbValidators_1.isAdmin,
    (0, express_validator_1.check)("name", "Name is required").not().isEmpty(),
    (0, express_validator_1.check)("description", "Description is required").not().isEmpty(),
    (0, express_validator_1.check)("price", "Price is required").not().isEmpty().isNumeric(),
    (0, express_validator_1.check)("brand", "Brand is required").not().isEmpty(),
    dbValidators_1.brandExists,
    (0, express_validator_1.check)("image", "Image is required").not().isEmpty().isURL(),
    (0, express_validator_1.check)("video", "Video is required").not().isEmpty().isURL(),
    validateFields_1.default,
], products_1.updateProduct);
router.delete("/:id", [
    validateJWT_1.default,
    dbValidators_1.isAdmin,
    validateFields_1.default,
], products_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=products.js.map