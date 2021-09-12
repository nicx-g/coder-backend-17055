"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitWsServer = void 0;
var socket_io_1 = require("socket.io");
var messages_1 = __importDefault(require("./messages"));
var InitWsServer = function (server) {
    var io = new socket_io_1.Server();
    io.attach(server);
    var messages = new messages_1.default();
    io.on("connection", function (socket) {
        var messagesData = messages.getMessages();
        io.emit("messages", messagesData);
        socket.on("new-message", function (message) {
            var date = new Date().toLocaleString();
            messages.saveMessage(socket.id, message.email, message.message, date);
            io.emit("messages", messages.getMessages());
        });
    });
};
exports.InitWsServer = InitWsServer;
