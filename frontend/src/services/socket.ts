import socketClient from "socket.io-client";
export const socket = socketClient("http://localhost:8080/", {
  forceNew: true,
  transports: ['websocket']
});
