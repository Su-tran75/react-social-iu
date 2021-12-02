import React from "react";
import "./rightBar.css";

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
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Gattuso</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
