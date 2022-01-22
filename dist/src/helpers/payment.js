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
exports.createPayment = void 0;
const config_1 = __importDefault(require("../../config"));
const stripe = require("stripe")(config_1.default.STRIPE_SECRET);
const nanoid_1 = require("nanoid");
const order_1 = __importDefault(require("../models/order"));
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, products, addressShipping, userId, total } = req.body;
    try {
        const payment = yield stripe.charges.create({
            amount: total * 100,
            currency: "usd",
            description: `Order ${(0, nanoid_1.nanoid)()} - User ${userId}`,
            source: token.id,
        });
        const order = yield order_1.default.create({
            id: (0, nanoid_1.nanoid)(),
            userId,
            productId: products,
            addressShipping,
            total,
        });
        return res.status(200).json({
            success: true,
            message: "Payment successful",
            data: {
                payment,
                order,
            },
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.createPayment = createPayment;
//# sourceMappingURL=payment.js.map