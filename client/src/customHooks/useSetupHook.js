import socket from "socketConnection/socketConnection.js";
import { useEffect } from "react";

const useSocketHook = () => {
    useEffect(() => {
        socket.connect();
    }, []);
};

export default useSocketHook;
