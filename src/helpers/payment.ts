import { Request, Response } from "express";
const { Stripe } = require("stripe");

import environment from "../../config";

const StripeSecretKey = environment.STRIPE_SECRET as string;

const stripe = new Stripe(StripeSecretKey);

export const createPaymentIntent = async (req: Request, res: Response) => {
  const { id, products, total } = req.body;

  const currency = "usd";

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency,
      payment_method: id,
      metadata: { integration_check: "accept_a_payment" },
    });

    const session = {
      paymentIntent,
      currency,
      products,
      total,
    };

    res.send(session);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
