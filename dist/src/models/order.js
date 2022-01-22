"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
class Order extends sequelize_1.Model {
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    productId: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
    },
    addressShipping: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
        defaultValue: null,
        references: {
            model: user_1.default,
            key: "address",
        },
    },
    total: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    tableName: "orders",
    sequelize: connection_1.default,
});
// Associate the user with the order
Order.belongsTo(user_1.default, { foreignKey: "userId", as: "user" });
// Associate products with the order
Order.hasMany(product_1.default, { foreignKey: "id", as: "products" });
exports.default = Order;
//# sourceMappingURL=order.js.map