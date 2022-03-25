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
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image}
        />
      ))}
    


      {/* <Post
        profilePic="https://github.com/nitinmano/image-store/blob/main/varun.jpg?raw=true"
        message="Hello, how are you?"
        timestamp="35 minutes ago"
        username="Varun"
        image="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
      <Post
        profilePic="https://avatars2.githubusercontent.com/u/17098281?s=400&u=f9b8f8c8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4"
        message="Hello, I am a sofwtware engineer and I am learning React JS looking forward to join zoho"
        timestamp="Today at 5:00PM"
        username="Nathan"
        image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      /> */}



    </div>
  );
}

export default Feed;
