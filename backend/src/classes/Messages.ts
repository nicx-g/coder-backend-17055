export default class Messages {
  message: Array<Object>;
  constructor() {
    this.message = [];
  }
  getMessages() {
    return this.message;
  }
  saveMessage(id: string, email: string, message: string, date: string) {
    this.message.push({ id, email, message, date });
  }
}
