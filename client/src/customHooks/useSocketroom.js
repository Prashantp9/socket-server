import React from "react";
import socket from "socketConnection/socketConnection.js";

const useSocketroom = {
    createRoom: (room) => {
        socket.emit("join", room);
    },
};

export default useSocketroom;
