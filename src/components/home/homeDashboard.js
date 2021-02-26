import React, { useState } from "react";
import { Link } from "react-router-dom";
import './homeDashboard.css'

const HomeDashboard = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="homeOuterContainer">
      <div className="homeInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <input placeholder="Room"
           className="joinInput" 
           type="text" 
           onChange={(event)=>setRoom(event.target.value)}></input>
        </div>
        <Link to={{ pathname: '/chat', state: { name:name,room:room } }}>
          <button className="button mt-20" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeDashboard;
