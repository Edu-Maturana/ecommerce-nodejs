import { Model, DataTypes } from "sequelize";
import { nanoid } from "nanoid";

import connection from "../database/connection";

class Brand extends Model {
  public id!: string;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Brand.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: nanoid(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: "brands",
    sequelize: connection,
  }
);

export default Brand;
