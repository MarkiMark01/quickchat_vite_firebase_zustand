import "./chatList.css";

const ChatList = () => {
  return (
    <section className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" placeholder="Search" />
        </div>
        <img src="./plus.png" alt="Plus" />
      </div>
    </section>
  );
};
export default ChatList;
