"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var getRandomNumber = function (min, max, decimal) {
    if (decimal) {
        var num = Math.random() * (max - min);
        return Number((num + min).toFixed(2));
    }
    else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
var getObjInString = function () {
    var randomNumber = getRandomNumber(1, 10, false);
    var obj = {
        id: randomNumber,
        title: "Producto " + randomNumber,
        price: getRandomNumber(1, 10000, true),
        thumbnail: "Foto " + randomNumber
    };
    return JSON.stringify(obj);
};
var server = http_1.default.createServer(function (request, response) {
    var message = getObjInString();
    response.end(message);
});
server.listen(3000, function () {
    console.log("todo ready en el puerto 3000");
});
