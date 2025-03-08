import express from "express";
const routerProduct = express.Router();
import { ValidateProduct } from "../middlewares/validstons";
import { getProducts, createProduct } from "../controllers/productController";

routerProduct
  .route("/product")
  .get(getProducts)
  .post(ValidateProduct, createProduct);

export default routerProduct;

/* {
    "title": "ТЕСТ_№3",
    "image": {
      "fileName": "ТЕСТ_№3",
      "originalName": "ТЕСТ_№3"
    },
    "category": "ТЕСТ_№3",
    "description": "ТЕСТ_№3",
    "price": 22124
    } */

/*     {
        "payment": "card", 
        "email": "admin@ya.ru",
        "phone": "+7999999999",
        "address": "test",
        "total": 4200,
        "items": [
            "662e97d0c2fed29cab5bf3db",
            "662e97dec2fed29cab5bf3dd"
        ]
    }  */
