import { Server, Socket } from "socket.io";
import * as http from "http";
import Products from "../classes/Products";
import Messages from "../classes/Messages";

export const initWsServer = (server: http.Server) => {
  const io: Server = new Server();
  io.attach(server);
  const products = new Products();
  const messages = new Messages();

  // io.once("connection", (socket: socketIo.Socket) => {

  // });
  io.on("connection", (socket: Socket) => {
    const productData = products.getProducts();
    const messagesData = messages.getMessages();
    io.emit("products", productData);
    io.emit("messages", messagesData);
    socket.on("new-product", (product: any) => {
      products.writeAProduct(product);
      io.emit("products", products.getProducts());
    });
    socket.on("new-message", (message: any) => {
      const date = new Date().toLocaleString();
      messages.saveMessage(socket.id, message.email, message.message, date);
      io.emit("messages", messages.getMessages());
    });
  });
};
