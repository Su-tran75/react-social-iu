import React, { useState, useEffect } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  console.log("Feed -> posts", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/61a5db664f7346581d689b1d");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
