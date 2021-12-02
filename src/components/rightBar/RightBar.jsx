import React from "react";
import "./rightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayText">
            <b>Falcao</b> and <b>7 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" className="rightBarAd" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
