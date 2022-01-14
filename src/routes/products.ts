import { Router } from "express";
import { check } from "express-validator";

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products";
import { isAdmin, brandExists } from "../middlewares/dbValidators";
import validateJWT from "../helpers/validateJWT";
import validateFields from "../middlewares/validateFields";

const router = Router();

router.post(
  "/",
  [
    validateJWT,
    isAdmin,
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty().isNumeric(),
    check("brand", "Brand is required").not().isEmpty(),
    brandExists,
    check("image", "Image is required").not().isEmpty().isURL(),
    check("video", "Video is required").not().isEmpty().isURL(),
    validateFields,
  ],
  createProduct
);

router.get("/", getProducts);
router.get("/:id", getProduct);

router.put(
  "/:id",
  [
    validateJWT,
    isAdmin,
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty().isNumeric(),
    check("brand", "Brand is required").not().isEmpty(),
    brandExists,
    check("image", "Image is required").not().isEmpty().isURL(),
    check("video", "Video is required").not().isEmpty().isURL(),
    validateFields,
  ],
  updateProduct
);

router.delete("/:id", [
  validateJWT,
  isAdmin,
  validateFields,
], deleteProduct);


export default router;
