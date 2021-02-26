import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import InfoBar from "../infobar/infoBar";
import Input from "../Input/input"
import "./chat.css";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:3001/";
  useEffect(() => {
    const data = location.state;
    let name = data.name;
    let room = data.room;
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    console.log(name, room);
    socket.emit("join", { name, room }, () => {});
  }, [ENDPOINT, location.state]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(messages);
  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
      </div>
    </div>
  );
}
export default Chat;
