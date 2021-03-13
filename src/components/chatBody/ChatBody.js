import React, { Component } from "react";
import "./ChatBody.css";
import ChatList from "../chatList/ChatList";
import ChatConetent from "../chatContent/ChatContent";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatConetent />
      </div>
    );
  }
}
