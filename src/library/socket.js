import { io } from "socket.io-client";

const socket = io("https://unobackend.wishalpha.com");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

export default socket;
