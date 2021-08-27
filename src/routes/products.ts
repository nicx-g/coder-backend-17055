import express from "express";
import Products from "../classes/Products";
import { checkAdmin } from "../middleware/checkAdmin";
const router = express.Router();

router.get("/listar", Products.get);
router.get("/listar/:id", Products.getById);
router.post("/guardar", checkAdmin, Products.create);
router.put("/actualizar/:id", checkAdmin, Products.update);
router.delete("/borrar/:id", checkAdmin, Products.delete);

export default router;
