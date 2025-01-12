import "./chat.css";

const Chat = () => {
  return (
    <section className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="Avatar" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Phone" />
          <img src="./video.png" alt="Video" />
          <img src="./info.png" alt="Info" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </section>
  );
};
export default Chat;
