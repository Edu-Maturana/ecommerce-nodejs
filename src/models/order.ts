import { Model, DataTypes } from "sequelize";

import connection from "../database/connection";
import User from "./user";
import Product from "./product";

class Order extends Model {
  public id!: string;
  public userId!: string;
  public productId!: string[];
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    addressShipping: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
      references: {
        model: User,
        key: "address",
      },
    },
    total: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    sequelize: connection,
  }
);

// Associate the user with the order
Order.belongsTo(User, { foreignKey: "userId", as: "user" });

// Associate products with the order
Order.hasMany(Product, { foreignKey: "id", as: "products" });

export default Order;