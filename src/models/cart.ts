import Mongoose from "mongoose";

const cartCollection = "cart";

const cartSchema = new Mongoose.Schema({
  created_at: { type: Date, required: true, default: Date.now() },
  product_id: { type: String, required: true },
});

export const cart = Mongoose.model(cartCollection, cartSchema);
