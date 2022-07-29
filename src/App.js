import React from "react";
import "./style.css";
import {WatchBox, WatchButtons,VideoChatBox,BelowTv} from "./components/components.js"

export default function App() {
  return (

    <div className = "main">
      <h1>Watch Television Together - WTT </h1>
      <WatchBox name="Main-watch-box" />
      <WatchButtons name ="watch-buttons"/>
      <BelowTv name ="below-Tv"/>
      <VideoChatBox name = "chat-Area"/>
      <p></p>
    </div>
  );
}
