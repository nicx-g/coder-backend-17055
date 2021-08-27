import fs from "fs/promises";
import { productsService } from "./product";

class CartService {
  path: string;
  constructor() {
    this.path = "./src/services/cart.txt";
  }

  async get(id?: number) {
    try {
      const resp = await fs.readFile(this.path, "utf-8");
      if (resp.length === 0) return [];
      if (id) return JSON.parse(resp).find((item: any) => item.id === id);
      else return JSON.parse(resp);
    } catch (error) {
      return {
        error: "Hubo un error al cargar el carrito",
      };
    }
  }

  async add(id: number) {
    try {
      const products = await fs.readFile(productsService.path, "utf-8");
      const productsParsed = JSON.parse(products);
      const index = productsParsed.findIndex((item: any) => item.id === id);
      if (!products[index]) return { error: "Este producto no existe" };
      const cartList = await this.get();
      cartList.push(productsParsed[index]);
      await fs.writeFile(this.path, JSON.stringify(cartList, null, "\t"));
      return productsParsed[index];
    } catch (error) {
      return {
        error: "Ocurrió un error al guardar el producto en el carrito",
      };
    }
  }
  async remove(id: number) {
    try {
      const products = await fs.readFile(productsService.path, "utf-8");
      const index = JSON.parse(products).findIndex(
        (item: any) => item.id === id
      );
      if (!products[index]) return { error: "Este producto no existe" };
      const cartList = await this.get();
      const newCartList = cartList.filter((item: any) => item.id !== id);
      await fs.writeFile(this.path, JSON.stringify(newCartList, null, "\t"));
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
