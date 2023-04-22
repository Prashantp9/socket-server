import socket from "socketConnection/socketConnection.js";
import { useEffect } from "react";

const useSocketHook = () => {
    useEffect(() => {
        socket.connect();

        socket.on("server", (msg) => {
            console.log(msg);
        });
    }, []);
};

export default useSocketHook;
