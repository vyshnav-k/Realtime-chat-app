import React from "react";

import "./input.css";

const Input = ({ message,setMessage,sendMessage}) => (
  <form className="form">
    <input
    className="input"
      type="text"
      placeholder="type something...."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          sendMessage(event);
        }
      }}
    ></input>
    <button className="sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
  </form>
);

export default Input;
