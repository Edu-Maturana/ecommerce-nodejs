import { Response } from "express";

import User from "../models/user";
import Order from "../models/order";
import Product from "../models/product";

export const EditAddress = async (req: any, res: Response) => {
  const { address } = req.body;
  const { id } = req.user;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  await User.update({ address }, { where: { id } });

  return res.status(200).json({
    message: "Address updated successfully",
  });
};

export const getUser = async (req: any, res: Response) => {
  const { id } = req.user;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  return res.status(200).json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    },
  });
};

export const getOrders = async (req: any, res: Response) => {
  const { id } = req.user;

  const orders = await Order.findAll({
    where: { userId: id },
  });

  if (!orders) {
    return res.status(400).json({ message: "Orders not found" });
  }

  return res.status(200).json({
    orders,
  });
};
