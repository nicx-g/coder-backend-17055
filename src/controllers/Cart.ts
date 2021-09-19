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
      const id = req.params.id;
      const productData = await cartService.get(id);
      res.json({ msg: "Carrito traido con éxito", data: productData });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async add(req: any, res: any) {
    try {
      const id = req.params.id;
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
      const id = req.params.id;
      const resp = await cartService.remove(id);
      res.json(resp);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
