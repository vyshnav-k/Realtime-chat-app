import React from "react";
import "./message.css";

const Message = ({name,message} ) => {
  let currentUser = false;
  let trimmedName = name.trim().toLowerCase();
  if (message.user === trimmedName) {
    currentUser = true;
  }
  return (
      currentUser ?(
        <div className="messageContainer justifyEnd">
        <p className="sentText pr-10 ">{trimmedName}</p>
        <div className="messageBox ">
          <p className="messageText ">{message.text}</p>
        </div>
      </div>
      ):(
        <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{message.text}</p>
        </div>
        <p className="sentText pl-10 ">{message.user}</p>
      </div>
      )
  )
};

 export default Message;