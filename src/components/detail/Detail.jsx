import "./detail.css";

const Detail = () => {
  return (
    <section className="detail">
      <div className="user">
        <img src="./avatar.png" alt="Avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="ArrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="ArrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="ArrowUp" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="download" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="ArrowUp" />
          </div>
          <button>Block User</button>
        </div>
      </div>
    </section>
  );
};
export default Detail;
