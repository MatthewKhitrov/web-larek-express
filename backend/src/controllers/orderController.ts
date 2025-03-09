import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import Product from "../model/productModel";
import constantsError from "errors/errorsconstant";

//@desc Create order / Создать заказ
//@route POST /order
//@access public

export const CreateOrder = async (_req: Request, _res: Response) => {
  const { payment, email, phone, address, total, items } = _req.body;

  const product = await Product.findById(items);
  console.log(`"Ищем этот Id: ${items}`);
  if (!product) {
    _res.status(400);
    throw new Error(`Товар с _id ${items} не найден`);
  }

  const newOrder = {
    id: uuidv4(), // Генерация уникального ID для заказа
    total: total, // Общая сумма заказа
  };

  _res.status(201).json(newOrder);
};
