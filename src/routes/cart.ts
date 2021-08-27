import express from "express";
import Cart from "../classes/Cart";
const router = express.Router();

router.get("/listar", Cart.get);
router.get("/listar/:id", Cart.getById);
router.post("/agregar/:id", Cart.add);
router.delete("/borrar/:id", Cart.remove);

export default router;
