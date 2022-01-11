import { Sequelize } from "sequelize";

import environment from "../config";

const url = environment.DB_URL as string;

const connection = new Sequelize(url);

export default connection;