import { io } from "socket.io-client";

const socket = io("http://localhost:8015");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

export default socket;
