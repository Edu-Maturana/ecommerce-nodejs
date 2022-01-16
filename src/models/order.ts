import { Model, DataTypes } from "sequelize";
import { nanoid } from "nanoid";

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
      defaultValue: nanoid(),
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
Order.belongsTo(User, { foreignKey: "userId" });

// Associate the product with the order
Order.hasMany(Product, { foreignKey: "productId" });
