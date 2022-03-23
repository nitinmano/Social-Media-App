import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./MessageSender.css";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NMPro here");
  }


  return (
    <div className="messageSender">
        <div className="messageSender__top">

            <Avatar />
            <form>
                <input className='messageSender__input' placeholder={"Tweet!!"} type="text" />
                <input placeholder='image URL {optional}'  />
                <button onClick={handleSubmit} type="submit">Hidden submit</button>
            </form>
            </div>

        <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCallIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>

          </div>
        </div>


    </div>
  )
}

export default MessageSender