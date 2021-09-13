"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Products_1 = __importDefault(require("../controllers/Products"));
var checkAdmin_1 = require("../middleware/checkAdmin");
var router = express_1.default.Router();
router.get("/", Products_1.default.get);
router.get("/:id", Products_1.default.getById);
router.post("/", checkAdmin_1.checkAdmin, Products_1.default.create);
router.put("/:id", checkAdmin_1.checkAdmin, Products_1.default.update);
router.delete("/:id", checkAdmin_1.checkAdmin, Products_1.default.delete);
exports.default = router;
