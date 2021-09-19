import messagesDB from "./dbM";

class Messages {
  async get() {
    return await messagesDB.getMessages();
  }
  async save(email: string, message: string) {
    await messagesDB.addMessage({ email, message });
  }
}

const messages = new Messages();
export default messages;
