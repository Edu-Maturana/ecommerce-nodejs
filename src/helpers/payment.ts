import { Request, Response } from "express";
import environment from "../../config";
const stripe = require("stripe")(environment.STRIPE_SECRET);
import { nanoid } from "nanoid";

import Order from "../models/order";

export const createPayment = async (req: Request, res: Response) => {
  const { token, products, addressShipping, userId, total } = req.body;

  try {
    const payment = await stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      description: `Order ${nanoid()} - User ${userId}`,
      source: token.id,
    });

    const order = await Order.create({
      id: nanoid(),
      userId,
      productId: products,
      addressShipping,
      total,
    });

    return res.status(200).json({
      success: true,
      message: "Payment successful",
      data: {
        payment,
        order,
      },
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
