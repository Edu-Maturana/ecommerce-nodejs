import { Router } from "express";
import { check } from "express-validator";

import { signUp } from "../controllers/auth";

const router = Router();

router.post(
    "/signup",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "Password is required - Min length is 8").isLength({ min: 6 })
    ],
    signUp
);

export default router;