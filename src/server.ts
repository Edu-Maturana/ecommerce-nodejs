import express, { Application } from 'express';
import cors from 'cors';

import connection from '../database/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.database();
        this.middlewares();
    }

    async database() {
        try {
            await connection.authenticate();
            console.log('Database connected!');
        }
        catch (error) {
            console.log("Error connecting to database: ", error);
        }
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;