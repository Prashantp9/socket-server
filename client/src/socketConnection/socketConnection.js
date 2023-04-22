import { io } from "socket.io-client";

const socket = new io("http://localhost:5000");

export default socket;
