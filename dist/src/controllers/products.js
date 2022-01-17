"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.getProducts = exports.createProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, brand, image, video } = req.body;
    const product = yield product_1.default.create({
        name,
        description,
        image,
        video,
        price,
        brand,
    });
    res.json({
        message: "Product created",
        product,
    });
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brand } = req.query;
    const { limit = 5, skip = 0 } = req.query;
    if (brand) {
        const products = yield product_1.default.findAll({
            where: {
                brand,
            },
            limit: Number(limit),
            offset: Number(skip),
        });
        products.reverse();
        res.json({
            message: "Products found",
            products,
        });
    }
    const products = yield product_1.default.findAll({
        limit: Number(limit),
        offset: Number(skip),
    });
    products.reverse();
    res.json({
        message: "Products found",
        products,
    });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }
    res.json({
        product,
    });
});
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, price, brand, image, video } = req.body;
    const product = yield product_1.default.findByPk(id);
    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }
    yield product.update({
        name,
        description,
        image,
        video,
        price,
        brand,
    });
    res.json({
        message: "Product updated",
        product,
    });
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }
    yield product.destroy();
    res.json({
        message: "Product deleted",
    });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map