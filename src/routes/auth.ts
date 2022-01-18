import { Router } from "express";
import { check } from "express-validator";

import { signUp, logIn } from "../controllers/auth";
import validateFields from "../middlewares/validateFields";
import { userExists } from "../middlewares/dbValidators";

const router = Router();

router.post(
  "/signup",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required - Min length is 5").isLength({
      min: 5,
    }),
    userExists,
    validateFields,
  ],
  signUp
);

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ],
  logIn
);

export default router;
