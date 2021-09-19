import Mongoose from "mongoose";

const messagesCollection = "messages";

const messagesSchema = new Mongoose.Schema({
  message: { type: String, required: true },
  email: { type: String, required: true },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export const messages = Mongoose.model(messagesCollection, messagesSchema);
