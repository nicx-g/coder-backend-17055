import express from "express";
import Products from "../controllers/Products";
import { checkAdmin } from "../middleware/checkAdmin";
const router = express.Router();

router.get("/", Products.get);
router.get("/:id", Products.getById);
router.post("/", checkAdmin, Products.create);
router.put("/:id", checkAdmin, Products.update);
router.delete("/:id", checkAdmin, Products.delete);

export default router;
