import { Request, Response } from "express";
const bcrypt = require("bcrypt");

import User from "../models/user";
import generateJWT from "../helpers/generateJWT";

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const securePassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: securePassword,
  });

  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  res.json({
    message: "Sign up success",
    data,
  });
};

export const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Data is incorrect",
    });
  }

  const token = generateJWT(user.id);

  res.json({
    message: "Log in success",
    token,
  });
};
