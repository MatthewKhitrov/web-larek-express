import { Request, Response } from "express";
import Product from "../model/productModel";
import constantsError from "../errors/errorsconstant";
import asyncHandler from "express-async-handler"

//@desc Get all products / получить все товары
//@route GET /product
//@access public

export const getProducts = asyncHandler( async (_req: Request, _res: Response) => {
  const products = await Product.find();
  _res.status(200).json({
    items: products,
    total: products.length,
  });
});

//@desc Create product / Создать товар
//@route POST /product
//@access public

export const createProduct = asyncHandler( async (_req: Request, _res: Response) => {
/*   console.log("Вывести данные продукта: ", _req.body); */

  const { title, image, category, description, price } = _req.body;

  //проверка на уникальность заголовка
  const titleAvailable = await Product.findOne({ title });
  if (titleAvailable) {
    _res.status(constantsError.CONFLICT_ERROR);
    throw new Error("Такой загаловок уже есть");
  }

  if (!title || !image || !category || !description || !price) {
    _res.status(constantsError.BAD_REQUEST_ERROR);
    throw new Error("Все поля обязательны");
  }

  const products = await Product.create({
    title,
    image,
    category,
    description,
    price,
  });
  _res.status(201).json(products);
});
