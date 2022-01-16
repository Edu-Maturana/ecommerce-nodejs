import { Router } from "express";
import { check } from "express-validator";

import { createBrand, getBrands, editBrand } from "../controllers/brands";
import validateJWT from "../helpers/validateJWT";
import validateFields from "../middlewares/validateFields";
import { isAdmin } from "middlewares/dbValidators";


const router = Router();

router.post(
    "/",
    [
        validateJWT,
        isAdmin,
        check("name", "Name is required").not().isEmpty(),
        validateFields,
    ],
    createBrand
);

router.get("/", getBrands);

router.put(
    "/:id",
    [
        validateJWT,
        isAdmin,
        check("name", "Name is required").not().isEmpty(),
        validateFields,
    ],
    editBrand
);

export default router;