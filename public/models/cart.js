"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cart = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var cartCollection = "cart";
var cartSchema = new mongoose_1.default.Schema({
    created_at: { type: Date, required: true, default: Date.now() },
    product_id: { type: String, required: true },
});
exports.cart = mongoose_1.default.model(cartCollection, cartSchema);
