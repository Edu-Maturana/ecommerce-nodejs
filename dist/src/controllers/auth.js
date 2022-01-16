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
exports.logIn = exports.signUp = void 0;
const bcrypt = require("bcrypt");
const user_1 = __importDefault(require("../models/user"));
const generateJWT_1 = __importDefault(require("../helpers/generateJWT"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const securePassword = yield bcrypt.hash(password, 10);
    const user = yield user_1.default.create({
        name,
        email,
        password: securePassword,
    });
    const data = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    res.json({
        message: "Sign up success",
        data,
    });
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_1.default.findOne({
        where: {
            email,
        },
    });
    if (!user) {
        return res.status(400).json({
            message: "User not found",
        });
    }
    const isValidPassword = yield bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(400).json({
            message: "Data is incorrect",
        });
    }
    const token = (0, generateJWT_1.default)(user.id);
    res.json({
        message: "Log in success",
        token,
    });
});
exports.logIn = logIn;
//# sourceMappingURL=auth.js.map