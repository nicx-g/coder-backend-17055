import { Server, Socket } from "socket.io";
import * as http from "http";
import messages from "./messages";

export const InitWsServer = (server: http.Server) => {
  const io: Server = new Server();
  io.attach(server);

  io.on("connection", async (socket: Socket) => {
    const messagesData = await messages.get();
    io.emit("messages", messagesData);
    socket.on("new-message", async (message: any) => {
      await messages.save(message.email, message.message);
      io.emit("messages", await messages.get());
    });
  });
};
