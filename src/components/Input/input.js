import React from "react";

import "./input.js";
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
    <button className="sendButton">Send</button>
  </form>
);

export default Input;
