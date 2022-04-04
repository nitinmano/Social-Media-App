import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from '@mui/icons-material/Delete';
import { ExpandMoreOutlined } from "@mui/icons-material";
import db from "./firebase";
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';

function Post({ id, profilePic, image, username, timestamp, message, likeCount,
   dislikeCount, likedUser,dislikedUser }) {

  const [{ user }] = useStateValue();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');


  useEffect(() => {
    let showComments;
    if (id) {
      showComments = db
        .collection("posts")
        .doc(id)
        .collection("comments")
        .orderBy('timestamp')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      showComments();
    };
  }, [id]);





  const handleComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(id).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment('');
  };
  const handleLike = () => {
    if (likedUser.includes(user.displayName)) {
      db.collection("posts").doc(id).update({
        likeCount: likeCount - 1,
        likedUser: firebase.firestore.FieldValue.arrayRemove(user.displayName),
      });
    }
    else {
      db.collection("posts").doc(id).update({
        likeCount: likeCount + 1,
        likedUser: likedUser.concat(user.displayName),
      });
    }
  };

  const handleDislike = () => {
    if (dislikedUser.includes(user.displayName)) {
      db.collection("posts").doc(id).update({
        dislikeCount: dislikeCount - 1,
        dislikedUser: firebase.firestore.FieldValue.arrayRemove(user.displayName),
      });
    }
    else {
      db.collection("posts").doc(id).update({
        dislikeCount: dislikeCount + 1,
        dislikedUser: dislikedUser.concat(user.displayName),
    });
  }
  };


  let deletePost = () => {
    console.log(id);
    if (username === user.displayName) {
      if (window.confirm("Your post will be deleted")) {
        db.collection("posts").doc(id).delete();
        alert("Your post is successfully deleted");
      }
    } else {
      alert("You don't have permission to delete " + username + "'s post");
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toLocaleTimeString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option"
          onClick={handleLike}>
          <ThumbUpIcon />
          <p>{likeCount}</p>
        </div>
        <div className="post__option"
          onClick={handleDislike}>
          <ThumbDownIcon />
          <p>{dislikeCount}</p>
        </div>
        <div className="post__option"
          onClick={deletePost} >
          <DeleteIcon />
          <p>Delete</p>
        </div>
        <div className="post__option">
          <ShareIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          {/* <AccountCircleIcon /> */}
          <ExpandMoreOutlined />
        </div>
      </div>
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong> {comment.username}</strong>: {comment.text}
          </p>
        ))}
      </div>
      <form className="post_commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={handleComment}
        >Post
        </button>
      </form>

    </div>

  );
}

export default Post;
