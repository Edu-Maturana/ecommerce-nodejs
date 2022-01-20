import { Model, DataTypes } from "sequelize";

import connection from "../database/connection";

class User extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public address!: any;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        tableName: "users",
        sequelize: connection,
    }
);

export default User;
