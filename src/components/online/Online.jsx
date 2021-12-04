import React from "react";
import "./online.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          className="rightBarProfileImg"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUsername">{user.username}</span>
    </li>
  );
}
