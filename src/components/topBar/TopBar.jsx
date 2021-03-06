import React from "react";
import "./topBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function topBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">OTG Social</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" sx={{ fontSize: 20 }} />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <div className="topBarLink">Homepage</div>
          <div className="topBarLink">Timeline</div>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" className="topBarImg" alt="profile" />
      </div>
    </div>
  );
}
