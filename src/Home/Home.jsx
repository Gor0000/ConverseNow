import React from "react";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useNavigate } from 'react-router-dom'
import Header from "./Header/header";
import Main from "./Main/Main";
import "./Home.css"
const socket = io.connect("http://localhost:3001");

function Home() {
  // const [message, setMessage] = useState("");
  // const [room, setRoom] = useState("");
  // const [receiveMessage, setReceiveMessage] = useState("");
  // const navigate = useNavigate();
  // const token = localStorage.getItem('token')
  
  // const sendMessage = () => {
  //   console.log(message);
  //   if (message !== "") {
  //     socket.emit("send_message", { message, room });
  //   }
  // };

  // const joinRoom = () => {
  //   console.log(room);
  //   socket.emit("join_room", room);
  // };

  // const RoomNumberDetect = (room) => {
  //   console.log(room);
  //   setRoom(room);
  // };

  // const inputChange = (e) => {
  //   setMessage(e);
  // };

  // useEffect(() => {
  //   if(!token){
  //     navigate('/Login')
  //   }
  //   socket.on("receive_message", (data) => {
  //     console.log(data);
  //     setReceiveMessage(data.message);
  //   });
  // }, [socket]);

  return (
    <>
      <div className="Home">
      <Header/>
      <Main/>
      </div>
      {/* <input
        type="text"
        onChange={(e) => inputChange(e.target.value)}
        placeholder={"Message . . ."}
      />
      <button onClick={sendMessage}>Send</button>
      <hr />
      <input type="text" onChange={(e) => RoomNumberDetect(e.target.value)} />
      <button onClick={joinRoom} placeholder={"Room Number"}>
        Join
      </button>
      <hr />
      <h1>{receiveMessage}</h1> */}
   
   </>
  );
}

export default Home;
