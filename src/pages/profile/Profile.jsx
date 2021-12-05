import React, { useState, useEffect } from "react";
import "./profile.css";
import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=leo`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

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
                src={user.coverPicture || PF + "person/no-cover.jpeg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PF + "person/no-avatar.jpeg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <h4 className="profileInfoDesc">{user.desc}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="leo" />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
