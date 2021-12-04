import React from "react";
import "./profile.css";
import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/9.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Leo Messi</h4>
              <h4 className="profileInfoDesc">Hello my friend.</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
