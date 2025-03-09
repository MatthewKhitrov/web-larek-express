import { celebrate, Joi, Segments } from "celebrate";
import Product from "../model/productModel";

export const ValidateProduct = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(2).max(30).required(),
    image: Joi.object()
      .keys({
        fileName: Joi.string().required(),
        originalName: Joi.string().required(),
      })
      .required(),
    category: Joi.string().required(),
    description: Joi.string().optional(),
    price: Joi.number().optional().allow(null),
  }),
});

export const ValidateOrder = celebrate({
  body: Joi.object().keys({
    items: Joi.array().items(Joi.string()).min(1).required(),

    total: Joi.number().required(),

    payment: Joi.string().valid("card", "online").required(),

    email: Joi.string().email().required(),

    phone: Joi.string().required(),

    address: Joi.string().required(),
  }),
});
