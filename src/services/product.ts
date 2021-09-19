import dbM from "./dbM";
class productService {
  path: string;
  constructor() {
    this.path = "./src/services/products.txt";
  }

  async get(id?: string) {
    try {
      if (id) {
        const product: any = await dbM.getProducts(id);
        if (product === null || product?.name === "CastError") {
          throw new Error("Este producto no existe");
        } else {
          return product;
        }
      } else {
        const resp: any = await dbM.getProducts();
        return resp.length === 0 ? [] : resp;
      }
    } catch (error) {
      throw {
        msg: "Hubo un error al cargar los productos",
        error: `${error}`,
      };
    }
  }

  async create(product: object) {
    try {
      return await dbM.createProduct(product);
    } catch (error) {
      throw {
        msg: "Ocurrió un error al crear el producto",
        error: `${error}`,
      };
    }
  }
  async update(id: string, updatedProduct: object) {
    try {
      const product: any = await dbM.getProducts(id);
      if (product === null || product.name === "CastError") {
        throw new Error("Producto no encontrado");
      } else {
        return await dbM.updateProduct(id, updatedProduct);
      }
    } catch (error) {
      throw {
        msg: "Ocurrió un error al editar el producto",
        error: `${error}`,
      };
    }
  }
  async delete(id: string) {
    try {
      const product: any = await dbM.getProducts(id);
      if (product === null || product.name === "CastError") {
        throw new Error("Este producto no existe");
      } else {
        await dbM.deleteProduct(id);
        return { success: true };
      }
    } catch (err) {
      throw { msg: "Ocurrió un error al eliminar el producto", err: `${err}` };
    }
  }
}

export const productsService = new productService();
