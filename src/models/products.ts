import Mongoose from "mongoose";

const productsCollection = "products";

const productsSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  urlPhoto: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now() },
});

export const products = Mongoose.model(productsCollection, productsSchema);
