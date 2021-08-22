"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWsServer = void 0;
var socket_io_1 = require("socket.io");
var Products_1 = __importDefault(require("../classes/Products"));
var Messages_1 = __importDefault(require("../classes/Messages"));
var initWsServer = function (server) {
    var io = new socket_io_1.Server();
    io.attach(server);
    var products = new Products_1.default();
    var messages = new Messages_1.default();
    // io.once("connection", (socket: socketIo.Socket) => {
    // });
    io.on("connection", function (socket) {
        var productData = products.getProducts();
        var messagesData = messages.getMessages();
        io.emit("products", productData);
        io.emit("messages", messagesData);
        socket.on("new-product", function (product) {
            products.writeAProduct(product);
            io.emit("products", products.getProducts());
        });
        socket.on("new-message", function (message) {
            var date = new Date().toLocaleString();
            messages.saveMessage(socket.id, message.email, message.message, date);
            io.emit("messages", messages.getMessages());
        });
    });
};
exports.initWsServer = initWsServer;
