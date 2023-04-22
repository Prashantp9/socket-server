import "dotenv/config";

import Express from "express";
import cors from "cors";
import { createServer } from "http";
import socketConnection from "./socketConnection/socketConnection.js";

const app = Express();
app.use(cors({ origin: "*" }));

const server = createServer(app);
const io = socketConnection(server);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("server", "server is avctive");
  socket.on("client", (msg) => {
    console.log(msg);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
