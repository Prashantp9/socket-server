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
  console.log("Server connected", socket.id);
  socket.emit("connected", { connected: socket.id });
  console.log(io.sockets.adapter.rooms);
  socket.on("disconnect", () => {
    console.log(io.sockets.adapter.rooms);
  });
  socket.on("create", (room) => {
    socket.join(room);
    console.log(io.sockets.adapter.rooms, [
      ...io.sockets.adapter.rooms.get(room),
    ]);
    // io.to(room)
    io.to(room).emit("room_members", {
      members: [...io.sockets.adapter.rooms.get(room)],
      temp: "temp",
    });
  });
  socket.on("keydown", (data) => {
    console.log(socket.id, data);
    io.to(data.room).emit("room_update", { ...data, id: socket.id });
    // socket.broadcast
    //   .to(data.room)
    //   .emit("room_update", { ...data, id: socket.id });
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
