import "../stylesheets/MultiPlayerHeader.scss";

import React, { useState } from "react";

import { Value } from "sass";
import { useSearchParams } from "react-router-dom";
import useSocketroom from "customHooks/useSocketroom";
import uuid from "react-uuid";

const CreateRoomContainer = () => {
    const [uniqueId, setUniqueId] = useState(uuid());
    const [searchParams, setSearchParams] = useSearchParams();
    const setRoomParams = (id: string) => {
        useSocketroom.createRoom(id);
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
    const [joiningLink, setJoiningLink] = useState<string>("temp");
    return (
        <>
            <div className="create-rooom-component">
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setJoiningLink(e.target.value);
                    }}
                    value={joiningLink}
                />
                <button
                    onClick={() => {
                        useSocketroom.createRoom(joiningLink);
                    }}>
                    Join Room
                </button>
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
                        onClick={() => setJoinRoom(true)}>
                        Join
                        {joinRoom && <JoinRoomContainer />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiPlayerHeader;
