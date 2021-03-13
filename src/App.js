import React from "react";
import "./App.css";
import ChatBody from "./components/chatBody/ChatBody";
import SideBar from "./components/sideBar/SideBar";


// import MyMessages from "./MyMessages";



function App() {
  return (
    <div className="__main">
      <SideBar />
      <ChatBody />
      {/* <MyMessages /> */}
    </div>
  );
}

export default App;
