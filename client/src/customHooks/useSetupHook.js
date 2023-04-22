import axios from "axios";
import socket from "socketConnection/socketConnection.js";
import { useEffect } from "react";

const useSocketHook = (user) => {
    useEffect(() => {
        socket.connect();
        socket.on("server", (msg) => {
            console.log(msg);
        });
        socket.emit("client", "fork");
    }, [user]);
};

export default useSocketHook;
