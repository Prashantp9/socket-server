import axios from "axios";
import socket from "socketConnection/socketConnection.js";
import { useEffect } from "react";

export const useSocketHook = () => {
    useEffect(() => {
        axios.get(`http://localhost:5000/fetchdata`).then((data) => {
            console.log(data);
        });
        socket.connect();
        socket.emit("message", "user message has been sent to the user");
    }, []);
};
