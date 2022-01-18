"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const nanoid_1 = require("nanoid");
const connection_1 = __importDefault(require("../database/connection"));
class Brand extends sequelize_1.Model {
}
Brand.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, nanoid_1.nanoid)(),
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
}, {
    tableName: "brands",
    sequelize: connection_1.default,
});
exports.default = Brand;
//# sourceMappingURL=brand.js.map