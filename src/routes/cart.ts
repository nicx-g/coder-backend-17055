import express from "express";
import Cart from "../controllers/Cart";
const router = express.Router();

router.get("/", Cart.get);
router.get("/:id", Cart.getById);
router.post("/:id", Cart.add);
router.delete("/:id", Cart.remove);

export default router;
