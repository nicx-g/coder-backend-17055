"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var path_1 = __importDefault(require("path"));
var products_1 = __importDefault(require("./routes/products"));
var app = express_1.default();
var port = 8080;
var httpServer = http_1.createServer(app);
var io = new socket_io_1.Server(httpServer);
httpServer.listen(port, function () { return console.log("Server running in port:  " + port); });
httpServer.on("error", function (err) { return console.error("There was an error: " + err); });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var publicPath = path_1.default.resolve(__dirname, "../public");
var viewsPath = path_1.default.resolve(__dirname, "./views");
var defaultLayoutPath = path_1.default.resolve(__dirname, "./views/layouts/index.hbs");
var arrayProducts = [];
app.use(express_1.default.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.engine("hbs", express_handlebars_1.default({
    extname: "hbs",
    defaultLayout: defaultLayoutPath,
}));
app.use("/api", products_1.default);
io.once("connection", function (socket) {
    io.emit("products", arrayProducts);
});
io.on("connection", function (socket) {
    socket.on("new-product", function (data) {
        arrayProducts.push(data);
        io.emit("products", arrayProducts);
    });
});
