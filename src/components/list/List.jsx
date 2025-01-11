import "./list.css";
import ChatList from "./chatList/ChatList";
import UserInfo from "./userInfo/UserInfo";

const List = () => {
  return (
    <section className="list">
      <UserInfo />
      <ChatList />
    </section>
  );
};
export default List;
