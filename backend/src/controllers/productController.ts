import { Request, Response } from "express";
import Product from "../model/productModel";
import constantsError from "../errors/errorsconstant";
import asyncHandler from "express-async-handler";

//@desc Get all products / получить все товары
//@route GET /product
//@access public

export const getProducts = asyncHandler(
  async (_req: Request, _res: Response) => {
    const products = await Product.find();
    _res.status(200).json({
      items: products,
      total: products.length,
    });
  }
);

//@desc Create product / Создать товар
//@route POST /product
//@access public

export const createProduct = asyncHandler(
  async (_req: Request, _res: Response) => {
    /*   console.log("Вывести данные продукта: ", _req.body); */

    const { title, image, category, description, price } = _req.body;

    try {
      const product = await Product.create({
        title,
        image,
        category,
        description,
        price,
      });
      _res.status(201).json(product);
    } catch (error) {
      if (error instanceof Error && error.message.includes("E11000")) {
        _res.status(constantsError.CONFLICT_ERROR);
        throw new Error("Такой заголовок уже есть");
      }
      _res.status(500).json({ message: "Ошибка сервера" }); // на случай других ошибок
    }
  }
);
