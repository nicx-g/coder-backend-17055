"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var products_1 = __importDefault(require("./routes/products"));
var cart_1 = __importDefault(require("./routes/cart"));
var app = express_1.default();
var port = 8080;
app.listen(port, function () { return console.log("Server running in port:  " + port); });
app.on("error", function (err) { return console.error("There was an error: " + err); });
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api/carrito", cart_1.default);
app.use("/api/productos", products_1.default);
