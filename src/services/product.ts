import fs from "fs/promises";

class productService {
  path: string;
  constructor() {
    this.path = "./src/services/products.txt";
  }

  async get(id?: number) {
    try {
      const resp = await fs.readFile(this.path, "utf-8");
      if (id) return JSON.parse(resp).find((item: any) => item.id === id);
      else return resp.length === 0 ? [] : JSON.parse(resp);
    } catch (error) {
      return {
        error: "Hubo un error al cargar los productos",
      };
    }
  }

  async create(product: object) {
    try {
      const products = await this.get();
      let newProduct = { ...product, id: products.length + 1 };
      products.push(newProduct);
      const productsParsed = JSON.stringify(products, null, "\t");
      await fs.writeFile(this.path, productsParsed);
      return newProduct;
    } catch (error) {
      return {
        error: "Ocurrió un error al crear el producto",
      };
    }
  }
  async update(id: number, updatedProduct: object) {
    try {
      const products = await this.get();
      const index = products.findIndex((item: any) => item.id === id);
      if (index === -1) return { error: "Producto no encontrado" };
      products[index] = { ...updatedProduct, id };
      await fs.writeFile(this.path, JSON.stringify(products, null, "\t"));
      return { ...updatedProduct, id };
    } catch (error) {
      return { error: "Ocurrió un error al editar el producto" };
    }
  }
  async delete(id: number) {
    try {
      const products = await this.get();
      const index = products.findIndex((item: any) => item.id === id);
      if (!products[index]) return { error: "Este producto no existe" };
      const newProducts = products.filter((item: any) => item.id !== id);
      await fs.writeFile(this.path, JSON.stringify(newProducts, null, "\t"));
      return { success: true, msg: "Producto eliminado con éxito" };
    } catch (err) {
      return { error: "Ocurrió un error al eliminar el producto" };
    }
  }
}

export const productsService = new productService();
