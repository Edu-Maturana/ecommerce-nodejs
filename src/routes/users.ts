import { Router } from "express";
import { check } from "express-validator";

import { EditAddress, getUser, getOrders } from "../controllers/users";
import validateJWT from "../helpers/validateJWT";
import validateFields from "../middlewares/validateFields";

const router = Router();

router.put(
    "/address",
    [
        validateJWT,
        check("address", "Address is required").not().isEmpty(),
        validateFields,
    ],
    EditAddress
)

router.get("/", [
    validateJWT,
], getUser);

router.get("/orders", [
    validateJWT,
], getOrders);

export default router;
