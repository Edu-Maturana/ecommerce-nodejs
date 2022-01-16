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
exports.EditAddress = void 0;
const user_1 = __importDefault(require("../models/user"));
const EditAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address } = req.body;
    const { id } = req.user;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    yield user_1.default.update({ address }, { where: { id } });
    return res.status(200).json({
        message: "Address updated successfully",
    });
});
exports.EditAddress = EditAddress;
//# sourceMappingURL=users.js.map