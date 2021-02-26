import React, { useEffect, useState } from "react";
import io from "socket.io-client";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT="localhost:3001";
  useEffect(() => {
    const data = location.state;
    let name = data.name;
    let room = data.room;
    socket=io(ENDPOINT)

    setName(name);
    setRoom(room);
    console.log(name,room);
  socket.emit('join',{name,room})

   
 
  },[ENDPOINT,location.state])
  return <h1>Chat</h1>;
}
export default Chat;
