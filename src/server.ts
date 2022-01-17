import express, { Application } from "express";
import cors from "cors";

import connection from "./database/connection";
import authRoutes from "./routes/auth";
import usersRoutes from "./routes/users";
import productsRoutes from "./routes/products";
import brandRoutes from "./routes/brands";
import orderRoutes from "./routes/orders";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    auth: "/api/auth",
    users: "/api/users",
    products: "/api/products",
    brands: "/api/brands",
    orders : "/api/orders",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.database();
    this.middlewares();
    this.routes();
  }

  async database() {
    try {
      await connection.authenticate();
      console.log("Database connected!");
    } catch (error) {
      console.log("Error connecting to database: ", error);
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
    this.app.use(this.apiPaths.users, usersRoutes);
    this.app.use(this.apiPaths.products, productsRoutes);
    this.app.use(this.apiPaths.brands, brandRoutes);
    this.app.use(this.apiPaths.orders, orderRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
