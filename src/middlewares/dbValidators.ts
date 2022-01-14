import { Request, Response } from "express";

import User from "../models/user";
import Brand from "../models/brand";
import envVars from "../../config";

export const userExists = async (req: Request, res: Response, next: any) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  next();
};

export const isAdmin = async (req: any, res: Response, next: any) => {
  const { id } = req.user;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user.email !== envVars.ADMIN_EMAIL) {
    return res.status(401).json({ message: "You are not authorized" });
  }

  next();
};

export const brandExists = async (req: Request, res: Response, next: any) => {
  const { brand } = req.body;
  
  const exists = await Brand.findOne({ where: {
    name: brand,
  } });
  
  if (!exists) {
    return res.status(400).json({ message: "Brand does not exist" });
  }

  next();
}
