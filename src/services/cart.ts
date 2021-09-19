import dbM from "./dbM";

class CartService {
  async get(id?: string) {
    try {
      if (id) {
        const cart: any = await dbM.getCart(id);
        if (cart === null || cart?.name === "CastError") {
          throw new Error("Este cart no existe");
        } else {
          return cart;
        }
      } else {
        const resp: any = await dbM.getCart();
        return resp.length === 0 ? [] : resp;
      }
    } catch (error) {
      throw {
        msg: "Hubo un error al cargar los productos",
        error: `${error}`,
      };
    }
  }

  async add(id: string) {
    try {
      const product: any = await dbM.getProducts(id);
      if (product === null || product.name === "CastError") {
        throw new Error("Este producto no existe");
      } else {
        await dbM.createCart(id);
        return { success: true };
      }
    } catch (error) {
      throw {
        msg: "Ocurrió un error al guardar el producto en el carrito",
        error: `${error}`,
      };
    }
  }
  async remove(id: string) {
    try {
      const cart: any = await dbM.getCart(id);
      if (cart === null || cart?.name === "CastError") {
        throw new Error("Este cart no existe");
      } else {
        await dbM.deleteCart(id);
        return {
          success: true,
          msg: "Este producto fue eliminado del carrito exitosamente",
        };
      }
    } catch (error) {
      return {
        msg: "Ocurrió un error al guardar el producto en el carrito",
        error: `${error}`,
      };
    }
  }
}

export const cartService = new CartService();
