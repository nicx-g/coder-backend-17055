import fs from "fs/promises";
import db from "./db";
import { productsService } from "./product";

class CartService {
  path: string;
  constructor() {
    this.path = "./src/services/cart.txt";
  }

  async get(id?: number) {
    try {
      if (id) return await db.get("cart", id);
      const resp = await db.get("cart");
      return resp.length === 0 ? [] : resp;
    } catch (error) {
      return {
        error: "Hubo un error al cargar el carrito",
      };
    }
  }

  async add(id: number) {
    try {
      const productId = await db.get("products", id);
      if (!productId.length) return { error: "Este producto no existe" };
      await db.create("cart", { product_id: id });
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        error: "Ocurrió un error al guardar el producto en el carrito",
      };
    }
  }
  async remove(id: number) {
    try {
      await db.delete("cart", id);
      return {
        success: true,
        msg: "Este producto fue eliminado del carrito exitosamente",
      };
    } catch (error) {
      return {
        error: "Ocurrió un error al guardar el producto en el carrito",
      };
    }
  }
}

export const cartService = new CartService();
