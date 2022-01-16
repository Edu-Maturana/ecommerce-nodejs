const { Router } = require("express");
import { check } from "express-validator";

import { createPaymentIntent } from "../helpers/payment";

const router = Router();

router.post(
  "/payment",
  [
    check("products", "products must be an array").isArray({ min: 1, max: 10 }),
    check("total", "total must be a number").isNumeric(),
  ],
  createPaymentIntent
);

export default router;