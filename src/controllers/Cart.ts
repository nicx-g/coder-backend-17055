import { cartService } from "../services/cart";

export default class Cart {
  static async get(req: any, res: any) {
    try {
      const cartData = await cartService.get();
      res.json(cartData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getById(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const cartData = await cartService.get(id);
      res.json(cartData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async add(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const newProduct = await cartService.add(id);
      res.json(newProduct);
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
