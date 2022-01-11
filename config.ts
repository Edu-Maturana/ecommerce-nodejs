import * as dotenv from 'dotenv';
dotenv.config();

const environment = {
    DB_URL: process.env.DB_URL,
}

export default environment;