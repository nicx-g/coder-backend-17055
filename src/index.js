"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_1 = __importDefault(require("./routes/products"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 8080;
var server = app.listen(port, function () { return console.log("Server running in port:  " + port); });
server.on('error', function (err) { return console.error("There was an error: " + err); });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var viewsPath = path_1.default.resolve(__dirname, "./views");
app.set('view engine', "pug");
app.set('views', viewsPath);
app.use('/api', products_1.default);
