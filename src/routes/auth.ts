import { Router } from "express";
import { check } from "express-validator";

import { signUp } from "../controllers/auth";
import validateFields from "../middlewares/validateFields";
import { userExists } from "../middlewares/dbValidators";

const router = Router();

router.post(
    "/signup",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "Password is required - Min length is 8").isLength({ min: 8 }),
        userExists,
        validateFields
    ],
    signUp
);

export default router;