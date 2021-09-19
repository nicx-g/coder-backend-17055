"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var messagesCollection = "messages";
var messagesSchema = new mongoose_1.default.Schema({
    message: { type: String, required: true },
    email: { type: String, required: true },
    created_at: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
exports.messages = mongoose_1.default.model(messagesCollection, messagesSchema);
