import React,{useEffect,useState} from "react";
import "./feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  
  return (
    <div className="feed">
      {/* StoryReels */}
      {/* Post Tweets */}
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image}
          likeCount={post.data.likeCount}
        />
      ))}
    
  </div>
  );
}

export default Feed;
