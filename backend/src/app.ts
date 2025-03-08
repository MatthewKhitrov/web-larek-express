import express from "express";
import dotenv from "dotenv";
import connectDb from "./dbConection";
import routerProduct from "./routes/productRoutes";
import cors from "cors";
import path from "path";
import routerOrder from "./routes/orederRoutes";
import { erroreHandler } from "./middlewares/error-handler";
import requestLogger from "./middlewares/logger";
import errorLogger from "./middlewares/logger";

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());
// теперь клиент имеет доступ только к публичным файлам
app.use(express.static(path.join(__dirname, "public")));
app.use(requestLogger);
app.use(routerProduct, routerOrder);
app.use(errorLogger);
app.use(erroreHandler);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
