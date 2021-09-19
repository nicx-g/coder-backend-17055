"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var productsCollection = "products";
var productsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    urlPhoto: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    created_at: { type: Date, required: true, default: Date.now() },
});
exports.products = mongoose_1.default.model(productsCollection, productsSchema);
