import "../stylesheets/MultiPlayerHeader.scss";

import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import uuid from "react-uuid";

const CreateRoomContainer = () => {
    const [uniqueId, setUniqueId] = useState(uuid());
    const [searchParams, setSearchParams] = useSearchParams();
    const setRoomParams = (id: string) => {
        console.log(id);
        setSearchParams({
            roomLink: id,
        });
    };
    return (
        <>
            <div className="create-rooom-component">
                <div className="link-container">{uniqueId}</div>
                <button onClick={() => setRoomParams(uniqueId)}>
                    Create Room
                </button>
                <button>Copy Link</button>
            </div>
        </>
    );
};

const JoinRoomContainer = () => {
    return (
        <>
            <div className="create-rooom-component">
                <div className="link-container">dohiafoiuhdfodhialodkifhj</div>
                <button>Join Room</button>
            </div>
        </>
    );
};
const MultiPlayerHeader = () => {
    const [createRoom, setCreateRoom] = useState(false);
    const [joinRoom, setJoinRoom] = useState(false);

    return (
        <>
            <div className="create-room-main-container">
                <div className="room-optin-container">
                    <div
                        className="create-room-container"
                        onClick={() => setCreateRoom(!createRoom)}>
                        Create
                        {createRoom && <CreateRoomContainer />}
                    </div>
                    <div
                        className="join-room-container"
                        onClick={() => setJoinRoom(!joinRoom)}>
                        Join
                        {joinRoom && <JoinRoomContainer />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiPlayerHeader;
