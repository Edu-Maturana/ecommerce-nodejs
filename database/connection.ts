import { Sequelize, Model, DataTypes } from "sequelize";

import environment from "../config";

const url = environment.DB_URL as string;

const sequelize = new Sequelize(url);

export default sequelize;