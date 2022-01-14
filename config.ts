import * as dotenv from 'dotenv';
dotenv.config();

const environment = {
    DB_URL: process.env.DB_URL,

    JWT_SECRET: process.env.JWT_SECRET,
}

export default environment;