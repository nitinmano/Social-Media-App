import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./MessageSender.css";
// import VideoCallIcon from "@mui/icons-material/VideoCall";
// import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
// import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import firebase from 'firebase/compat/app';
import db from "./firebase";


function MessageSender() {

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input.trim(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
      likeCount: 0,
      dislikeCount: 0,
      likedUser: [],
      dislikedUser: [],
    });
    console.log("Data Added");

    // Reset input
    setInput("");
    setImageUrl("");

  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input" placeholder={`Tweet!!, ${user.displayName}`} />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="messageSender__image" placeholder="image URL {optional}" />
          <button onClick={handleSubmit} type="submit">
            submit
          </button>
        </form>
      </div>

      {/* <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCallIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div> */}
    </div>
  );
}

export default MessageSender;