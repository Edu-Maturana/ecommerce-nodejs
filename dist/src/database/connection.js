"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const url = config_1.default.DB_URL;
const connection = new sequelize_1.Sequelize(url);
exports.default = connection;
//# sourceMappingURL=connection.js.map