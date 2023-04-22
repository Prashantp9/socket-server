import "dotenv/config";

import Express from "express";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import { createServer } from "http";

const socketCorsConfig = {
  origin: `http://localhost:3000`,
  credentials: true,
};

const app = Express();
app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
  })
);
// to run both express server and socket io simaltaneously
const server = createServer(app);
const io = new SocketIOServer(server, {
  cors: socketCorsConfig,
});

io.on("connection", (socket) => {
  console.log("SocketId", socket.id);
});

io.on("message", (msg) => {
  console.log(msg);
});

// main connection
server.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
