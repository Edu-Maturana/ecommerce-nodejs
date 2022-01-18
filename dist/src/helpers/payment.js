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
exports.createPaymentIntent = void 0;
const { Stripe } = require("stripe");
const config_1 = __importDefault(require("../../config"));
const StripeSecretKey = config_1.default.STRIPE_SECRET;
const stripe = new Stripe(StripeSecretKey);
const createPaymentIntent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, products, total } = req.body;
    const currency = "usd";
    try {
        const paymentIntent = yield stripe.paymentIntents.create({
            amount: total,
            currency,
            payment_method: id,
            metadata: { integration_check: "accept_a_payment" },
        });
        const session = {
            paymentIntent,
            currency,
            products,
            total,
        };
        res.send(session);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});
exports.createPaymentIntent = createPaymentIntent;
//# sourceMappingURL=payment.js.map