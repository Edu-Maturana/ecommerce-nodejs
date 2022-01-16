import { Request, Response } from "express";

import Product from "../models/product";

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, brand, image, video } = req.body;

  const product = await Product.create({
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
  const products = await Product.findAll();

  res.json({
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
}

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
}