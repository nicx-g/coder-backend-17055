"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var socket_1 = require("./services/socket");
var http_1 = require("http");
var app = express_1.default();
var httpServer = http_1.createServer(app);
socket_1.initWsServer(httpServer);
var port = 8080;
var server = httpServer.listen(port, function () {
    return console.log("Server running in port:  " + port);
});
server.on("error", function (err) { return console.error("There was an error: " + err); });
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
// app.use("/api", products);
