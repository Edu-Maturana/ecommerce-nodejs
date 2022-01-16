import { Request, Response } from "express";

import Brand from "../models/brand";

export const createBrand = async (req: Request, res: Response) => {
  const { name } = req.body;

  const brand = await Brand.create({ name });

  return res.status(200).json({
    message: "Brand created successfully",
    brand,
  });
};

export const getBrands = async (req: Request, res: Response) => {
  const brands = await Brand.findAll({
    attributes: ["id", "name"],
  });

  return res.status(200).json({
    brands,
  });
};