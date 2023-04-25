import { useEffect, useState } from "react";

import axios from "axios";
import { io } from "socket.io-client";

const socket = new io("http://192.168.1.5:5000");

const useSocketHook = () => {
    useEffect(() => {
        socket.connect();
        socket.on("connected", (data) => {
            console.log(data);
        });

        socket.on("room_members", (data) => {
            console.log(data);
        });

        socket.on("room_update", (data) => {
            console.log(data);
        });
    }, [socket]);

    return [socket.id];
};

export default useSocketHook;
export { socket };
