import "../stylesheets/MultiPlayerHeader.scss";

import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import useSocketHook, { socket } from "customHooks/useSetupHook";

import { Value } from "sass";
import useSocketroom from "customHooks/useSocketroom";
import uuid from "react-uuid";

const CreateRoomContainer = (prop: any) => {
    const navigate = useNavigate();
    const [uniqueId, setUniqueId] = useState(uuid());
    const [searchParams, setSearchParams] = useSearchParams();
    const setRoomParams = () => {
        useSocketroom.createRoom(socket.id);
        navigate(`fast_fingers/${socket.id}`);
        // setSearchParams({
        //     roomLink: id,
        // });
    };
    return (
        <>
            <div className="create-rooom-component">
                <div className="link-container">{socket.id}</div>
                <button onClick={() => setRoomParams()}>Create Room</button>
                <button>Copy Link</button>
            </div>
        </>
    );
};

const JoinRoomContainer = () => {
    const navigate = useNavigate();
    const [joiningLink, setJoiningLink] = useState<string>("");
    return (
        <>
            <div className="create-rooom-component">
                <input
                    placeholder="enter joining link here"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setJoiningLink(e.target.value);
                    }}
                    value={joiningLink}
                />
                <button
                    onClick={() => {
                        useSocketroom.createRoom(joiningLink);
                        navigate(`/fast_fingers/${joiningLink}`);
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
    const [socketId] = useSocketHook();
    console.log("Accessing state socket", socketId);

    return (
        <>
            <div className="create-room-main-container">
                <div className="room-optin-container">
                    <div
                        className="create-room-container"
                        onClick={() => setCreateRoom(!createRoom)}>
                        Create
                        {createRoom && (
                            <CreateRoomContainer socketId={socketId} />
                        )}
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
