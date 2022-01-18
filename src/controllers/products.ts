import { Request, Response } from "express";
import { nanoid } from "nanoid";

import Product from "../models/product";

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, brand, image, video } = req.body;

  const product = await Product.create({
    id: nanoid(),
    name,
    description,
    image,
    video,
    price,
    brand,
  });

  res.json({
    message: "Product created",
    product,
  });
};

export const getProducts = async (req: Request, res: Response) => {
  const { brand } = req.query;
  const { limit=5 } = req.query;

  if (brand) {
    const products = await Product.findAll({
      where: {
        brand,
      },
      limit: Number(limit),
    });

    products.reverse();

    return res.json({
      message: "Products found",
      products,
    });
  }

  const products = await Product.findAll({
    limit: Number(limit),
  });

  products.reverse();

  res.json({
    message: "Products found",
    products,
  });
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json({
    product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, brand, image, video } = req.body;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  await product.update({
    name,
    description,
    image,
    video,
    price,
    brand,
  });

  res.json({
    message: "Product updated",
    product,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  await product.destroy();

  res.json({
    message: "Product deleted",
  });
};
