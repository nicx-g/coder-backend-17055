import mongoose from "mongoose";
import { messages } from "../models/messages";
import { products } from "../models/products";
import { cart } from "../models/cart";

class DB {
  url: string;
  options: Object;
  constructor() {
    this.url = "mongodb://localhost:27017/ecommerce";
    this.options = { useNewUrlParser: true, useUnifiedTopology: true };
  }
  async init() {
    try {
      await mongoose.connect(this.url, this.options);
      console.log("DB connected");
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }
  // Products
  async getProducts(id?: string) {
    try {
      if (id) return await products.findById(id);
      return await products.find({});
    } catch (error: any) {
      return error;
    }
  }
  async createProduct(product: Object) {
    try {
      const productSaveModel = new products(product);
      return await productSaveModel.save();
    } catch (error: any) {
      return error;
    }
  }
  async updateProduct(id: string, product: Object) {
    try {
      return await products.findByIdAndUpdate(id, product, { new: true });
    } catch (error: any) {
      return error;
    }
  }
  async deleteProduct(id: string) {
    try {
      return await products.findByIdAndDelete(id);
    } catch (error: any) {
      return error;
    }
  }

  //Cart
  async getCart(id?: string) {
    try {
      if (id) return await cart.findById(id);
      return await cart.find({});
    } catch (error: any) {
      return error;
    }
  }
  async createCart(product_id: string) {
    try {
      const cartSaveModel = new cart({ product_id });
      return await cartSaveModel.save();
    } catch (error: any) {
      return error;
    }
  }
  async deleteCart(id: string) {
    try {
      return await cart.findByIdAndDelete(id);
    } catch (error: any) {
      return error;
    }
  }

  // Messages
  async getMessages() {
    try {
      return await messages.find({});
    } catch (error: any) {
      return error;
    }
  }

  async addMessage(message: any) {
    try {
      const messageSaveModel = new messages(message);
      return await messageSaveModel.save();
    } catch (error: any) {
      return error;
    }
  }
}

const db = new DB();
export default db;
