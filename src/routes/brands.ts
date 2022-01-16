import { Router } from "express";
import { check } from "express-validator";

import { createBrand, getBrands} from "../controllers/brands";
import validateJWT from "../helpers/validateJWT";
import validateFields from "../middlewares/validateFields";
import { isAdmin } from "../middlewares/dbValidators";


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

export default router;