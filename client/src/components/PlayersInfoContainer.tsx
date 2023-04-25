import "../stylesheets/PlayersInfoContainer.scss";

import React, { useState } from "react";

import { socket } from "customHooks/useSetupHook";

// import Profile from "../Assets/images/Vector (1).svg";

const PlayersInfoContainer = () => {
    const [players, setPlayers] = useState([]);
    socket.on("room_members", (data: any) => {
        // console.log(data);
        setPlayers(data.members);
    });

    return (
        <>
            <div className="players-profile-base-container">
                {players.map(() => (
                    <div className="players-profile-card">
                        <p className="inner-profile-container">
                            {/* <img src={"Profile"} alt="profile" /> */}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PlayersInfoContainer;
