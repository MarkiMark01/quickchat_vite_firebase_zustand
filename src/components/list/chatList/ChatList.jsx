import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <section className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" className="iconSearch" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="plus">
          <img
            src={addMode ? "./minus.png" : "./plus.png"}
            alt="Plus"
            onClick={() => setAddMode((prev) => !prev)}
            className="add"
          />
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt="Avatar" className="itemsImg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello Jork</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt="Avatar" className="itemsImg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello Jork</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt="Avatar" className="itemsImg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello Jork</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt="Avatar" className="itemsImg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello Jork</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt="Avatar" className="itemsImg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello Jork</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png" alt="Avatar" className="itemsImg" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello Jork</p>
        </div>
      </div>
    </section>
  );
};
export default ChatList;
