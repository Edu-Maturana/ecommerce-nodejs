import { Request, Response } from "express";

import User from "../models/user";

export const userExists = async (req: Request, res: Response, next: any) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  next();
};
