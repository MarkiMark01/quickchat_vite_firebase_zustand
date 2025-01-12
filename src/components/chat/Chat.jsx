import "./chat.css";

const Chat = () => {
  return (
    <section className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="Avatar" className="imgAva" />
          <div className="texts">
            <span className="firstname">John Doe</span>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Phone" />
          <img src="./video.png" alt="Video" />
          <img src="./info.png" alt="Info" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="bottomIcons">
          <img src="./img.png" alt="img" className="bottomIcons_img" />
          <img src="./camera.png" alt="camera" className="bottomIcons_img" />
          <img src="./mic.png" alt="mic" className="bottomIcons_img" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="bottomInput"
        />
        <div className="emoji">
          <img src="./emoji.png" alt="Emoji" />
        </div>
        <button className="sendButton">Send</button>
      </div>
    </section>
  );
};
export default Chat;
