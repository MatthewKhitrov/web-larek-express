import { Request, Response } from "express";
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';


//@desc Create oreder / Создать заказ
//@route POST /order
//@access public

export const CreateOrder = async (_req: Request, _res: Response) => {
  const { payment, email, phone, address, total, items } = _req.body;
  console.log(_req.body);

  if (!payment || !email || !phone || !address || !total || !items) {
    _res.status(400);
    throw new Error("Все поля обязательны");
  }
  const newOrder = {
    id: uuidv4(), // Генерация уникального ID для заказа
    total: total, // Общая сумма заказа
  };
  _res.status(201).json(newOrder);
};
