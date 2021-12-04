import React from "react";
import "./closeFriend.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function CloseFriend({ user }) {
  return (
    <li className="sideBarFriend">
      <img src={PF + user.profilePicture} alt="" className="sideBarFriendImg" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}
