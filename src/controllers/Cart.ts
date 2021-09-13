import { cartService } from "../services/cart";

export default class Cart {
  static async get(req: any, res: any) {
    try {
      const cartData = await cartService.get();
      res.json({
        msg: "Productos del carrito traídos con éxito",
        data: cartData,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getById(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const cartData = await cartService.get(id);
      res.json({
        msg: "Producto del carrito traído con éxito",
        data: cartData[0],
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async add(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      await cartService.add(id);
      res.json({
        msg: "Producto añadido con éxito al carrito",
        success: true,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async remove(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const resp = await cartService.remove(id);
      res.json(resp);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
