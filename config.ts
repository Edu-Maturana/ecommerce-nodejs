import * as dotenv from 'dotenv';
dotenv.config();

const environment = {
    DB_URL: process.env.DB_URL,

    JWT_SECRET: process.env.JWT_SECRET,

    ADMIN_EMAIL: process.env.ADMIN_EMAIL,

    STRIPE_SECRET: process.env.STRIPE_SECRET,
}

export default environment;