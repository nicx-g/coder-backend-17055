import { Server, Socket } from "socket.io";
import * as http from "http";
import Messages from "./messages";

export const InitWsServer = (server: http.Server) => {
  const io: Server = new Server();
  io.attach(server);
  const messages = new Messages();

  io.on("connection", (socket: Socket) => {
    const messagesData = messages.getMessages();
    io.emit("messages", messagesData);
    socket.on("new-message", (message: any) => {
      const date = new Date().toLocaleString();
      messages.saveMessage(socket.id, message.email, message.message, date);
      io.emit("messages", messages.getMessages());
    });
  });
};
