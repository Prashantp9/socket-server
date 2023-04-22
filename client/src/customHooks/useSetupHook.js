import axios from "axios";
import socket from "socketConnection/socketConnection.js";
import { useEffect } from "react";

export const useSocketHook = () => {
    useEffect(() => {
        socket.connect();
        socket.on("connect", (socket) => {
            console.log(socket);
        });
        socket.emit("message", (msg) => {
            console.log(msg);
        });
    }, []);
};
