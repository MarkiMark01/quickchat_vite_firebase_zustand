import "./chatList.css";

const ChatList = () => {
  return (
    <section className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" className="iconSearch"/>
          <input type="text" placeholder="Search" />
        </div>
        <div className="plus">
        <img src="./plus.png" alt="Plus" className="add"/>
        </div>
      </div>
    </section>
  );
};
export default ChatList;
