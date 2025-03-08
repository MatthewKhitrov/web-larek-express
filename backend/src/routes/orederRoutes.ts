import express from "express";
const routerOrder = express.Router();
import {  ValidateOrder } from "../middlewares/validstons"

import { CreateOrder } from "../controllers/orderController";

routerOrder.route("/order").post(ValidateOrder, CreateOrder)

export default routerOrder;