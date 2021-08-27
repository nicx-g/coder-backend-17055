"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Products_1 = __importDefault(require("../classes/Products"));
var checkAdmin_1 = require("../middleware/checkAdmin");
var router = express_1.default.Router();
router.get("/listar", Products_1.default.get);
router.get("/listar/:id", Products_1.default.getById);
router.post("/guardar", checkAdmin_1.checkAdmin, Products_1.default.create);
router.put("/actualizar/:id", checkAdmin_1.checkAdmin, Products_1.default.update);
router.delete("/borrar/:id", checkAdmin_1.checkAdmin, Products_1.default.delete);
exports.default = router;
