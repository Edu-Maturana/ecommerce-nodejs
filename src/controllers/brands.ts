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
    message: "Brands retrieved successfully",
    brands,
  });
};

export const getBrand = async (req: Request, res: Response) => {
  const { id } = req.params;

  const brand = await Brand.findByPk(id, {
    attributes: ["id", "name"],
  });

  return res.status(200).json({
    message: "Brand retrieved successfully",
    brand,
  });
};

export const editBrand = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const brand = await Brand.findByPk(id);

  if (!brand) {
    return res.status(400).json({ message: "Brand not found" });
  }

  await brand.update({ name });

  return res.status(200).json({
    message: "Brand updated successfully",
  });
};
