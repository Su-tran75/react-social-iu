import React from "react";
import "./rightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "--"}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/7.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/7.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/10.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/9.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/8.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/6.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/7.jpeg`}
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">John Doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
