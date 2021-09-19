import { products } from "../models/products";
import { productsService } from "../services/product";

export default class Products {
  static async get(req: any, res: any) {
    try {
      const productsData = await productsService.get();
      res.json({ msg: "Productos traídos con éxito", data: productsData });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getById(req: any, res: any) {
    try {
      const id = req.params.id;
      const productData = await productsService.get(id);
      res.json({ msg: "Producto traido con éxito", data: productData });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req: any, res: any) {
    try {
      const newProduct = await productsService.create(req.body);
      res.json({ msg: "Producto creado con éxito", data: newProduct });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async update(req: any, res: any) {
    try {
      const id = req.params.id;
      const updatedProduct = await productsService.update(id, req.body);
      res.json({ msg: "Producto editado exitosamente", data: updatedProduct });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req: any, res: any) {
    try {
      const id = req.params.id;
      const resp = await productsService.delete(id);
      if (resp.success) res.json({ msg: "Producto eliminado con éxito" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
