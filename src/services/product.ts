import fs from "fs/promises";
import db from "./db";

class productService {
  path: string;
  constructor() {
    this.path = "./src/services/products.txt";
  }

  async get(id?: number) {
    try {
      if (id) return await db.get("products", id);
      const resp: any = await db.get("products");
      return resp.length === 0 ? [] : resp;
    } catch (error) {
      return {
        msg: "Hubo un error al cargar los productos",
        error,
      };
    }
  }

  async create(product: object) {
    try {
      const newId = await db.create("products", product);
      const newProduct = await db.get("products", newId);
      return newProduct[0];
    } catch (error) {
      return {
        msg: "Ocurrió un error al crear el producto",
        error,
      };
    }
  }
  async update(id: number, updatedProduct: object) {
    try {
      const product: any = await db.get("products", id);
      if (!product.length) return { error: "Producto no encontrado" };
      await db.update("products", id, updatedProduct);
      const updated = await db.get("products", id);
      return updated[0];
    } catch (error) {
      return { error: "Ocurrió un error al editar el producto" };
    }
  }
  async delete(id: number) {
    try {
      const product = await db.get("products", id);
      if (!product.length) return { error: "Este producto no existe" };
      await db.delete("products", id);
      return { success: true };
    } catch (err) {
      return { error: "Ocurrió un error al eliminar el producto" };
    }
  }
}

export const productsService = new productService();
