import { Model, DataTypes } from "sequelize";
import { nanoid } from "nanoid";

import connection from "../database/connection";
import Brand from "../models/brand";

class Product extends Model {
  public id!: string;
  public name!: string;
  public description!: string;
  public image!: string;
  public video!: string;
  public price!: number;
  public brand!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: nanoid(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    sequelize: connection,
  }
);

// Associate the brand with the product
Product.belongsTo(Brand, { foreignKey: "brand" });

export default Product;
