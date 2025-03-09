import mongoose from "mongoose";

interface IProduct {
    title: String;
    image: {
        fileName: string;
        originalName: string;
      };
    category: string;
    description: string;
    price: number;
    _id: mongoose.Types.ObjectId;
}

const productSchema = new mongoose.Schema<IProduct>({
  title: {
    type: String,
    unique: true,
    required: [true, 'Поле "title" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля "title" - 2'],
    maxlength: [30, 'Максимальная длина поля "title" - 30'],
  },
  image: {
    fileName: {
      type: String,
      required: [true, 'Поле "fileName" должно быть заполнено'],
    },
    originalName: {
      type: String,
      required: [true, 'Поле "originalName" должно быть заполнено'],
    },
  },
  category: {
    type: String,
    required: [true, 'Поле "category" должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле "description" должно быть заполнено'],
  },
  price: {
    type: Number,
    required: [true, 'Поле "price" должно быть заполнено'],
    default: 0,
  },
});

export default mongoose.model<IProduct>("product", productSchema);
