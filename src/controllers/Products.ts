import { productsService } from "../services/product";

export default class Products {
  static async get(req: any, res: any) {
    try {
      const productsData = await productsService.get();
      res.json(productsData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getById(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const productsData = await productsService.get(id);
      res.json(productsData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req: any, res: any) {
    try {
      const newProduct = await productsService.create(req.body);
      res.json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async update(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const updatedProduct = await productsService.update(id, req.body);
      res.json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req: any, res: any) {
    try {
      const id = parseInt(req.params.id);
      const resp = await productsService.delete(id);
      res.json(resp);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
