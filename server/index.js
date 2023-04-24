import "dotenv/config";

import Express from "express";
import cors from "cors";
import { createServer } from "http";
import socketConnection from "./socketConnection/socketConnection.js";

const app = Express();

app.use(cors({ origin: "*" }));

const server = createServer(app);
// connectin to the socket server
const io = socketConnection(server);
let activeSockets = [];

io.on("connection", (socket) => {
  console.log("connected", socket.id);
  socket.emit("server", "server is active");
  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
