import "dotenv/config";

import Express from "express";
import { Server as SocketIOServer } from "socket.io";
import { createServer } from "http";

const app = Express();
// to run both express server and socket io simaltaneously
const server = createServer(app);
const io = new SocketIOServer(server, {
  cors: "http://localhost:3000",
});

io.on("connection", (socket) => {
  console.log(socket.id);
});

io.on("message", (msg) => {
  console.log(msg);
});

// main connection
server.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
