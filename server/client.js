import { io } from "socket.io-client";

const socket = new io("http://localhost:5000");

socket.connect();
socket.emit("message", "this is user message");
