import messagesDB from "./messagesDB";

class Messages {
  async get() {
    return await messagesDB.get("messages");
  }
  async save(email: string, message: string) {
    await messagesDB.create({ email, message });
  }
}

const messages = new Messages();
export default messages;
