import "./detail.css";

const Detail = () => {
  return (
    <section className="detail">
      <div className="userd">
        <img src="./avatar.png" alt="Avatar" className="userAvatar"/>
        <h2 className="userdTitle">Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="ArrowUp" className="titleImg"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="ArrowUp" className="titleImg"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="ArrowUp" className="titleImg"/>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="" alt="" className="photoDetailImg"/>
                <span className="photoDetailSpan">photo_2024_2.png</span>
              </div>
            </div>
            <img src="./download.png" alt="download" className="titleImg"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="ArrowUp" className="titleImg"/>
          </div>
          <button className="optionBtn">Block User</button>
        </div>
      </div>
    </section>
  );
};
export default Detail;
