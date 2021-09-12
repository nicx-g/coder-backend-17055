"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Cart_1 = __importDefault(require("../controllers/Cart"));
var router = express_1.default.Router();
router.get("/listar", Cart_1.default.get);
router.get("/listar/:id", Cart_1.default.getById);
router.post("/agregar/:id", Cart_1.default.add);
router.delete("/borrar/:id", Cart_1.default.remove);
exports.default = router;
