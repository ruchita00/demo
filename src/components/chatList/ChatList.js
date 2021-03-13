import React, { Component } from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {

      id: 1,
      name: "Tim Hover",

    },
    {

      id: 2,
      name: "Ayub Rossi",
          },
    {

      id: 3,
      name: "Hamaad Dejesus",
         },
    {
           id: 4,
      name: "Eleni Hobbs",

    },
    {

      id: 5,
      name: "Elsa Black",

    },
    {

      id: 6,
      name: "Kayley Mellor",

    },
    {

      id: 7,
      name: "Hasan Mcculloch",

    },
    {

      id: 8,
      name: "Autumn Mckee",

    },
    {

      id: 9,
      name: "Allen Woodley",

    },
    {

      id: 10,
      name: "Manpreet David",

    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>
            My Messages <hr />
          </h2>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <div className="search_container">
              <button className="search-btn">
                <i className="fa fa-search"></i>
              </button>
              <input type="text" placeholder="Search Messages" required />
            </div>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
               />
            );
          })}
        </div>
      </div>
    );
  }
}
