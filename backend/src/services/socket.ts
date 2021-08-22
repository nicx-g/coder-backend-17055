import * as socketIo from "socket.io";
import * as http from "http";

export const initWsServer = (server: http.Server) => {
  const io: socketIo.Server = new socketIo.Server();
  io.attach(server);

  io.on("connection", (socket: socketIo.Socket) => {
    console.log("HOLA");
  });
};
