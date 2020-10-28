import { Avatar, Button } from '@material-ui/core';
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
      e.preventDefault();

      db.collection("posts").add({
        displayName: "Oyagbile Oluwaseun",
        username: "OyagbileOluwas1",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://oyagbileoluwaseun.github.io/website/images/profile-pic.jpg",
      });
  
      setTweetMessage("");
      setTweetImage("");
    
  };


  return (
    <div className="tweetBox">
        <form>
           <div className="tweetBox__input">
               <Avatar src="https://oyagbileoluwaseun.github.io/website/images/profile-pic.jpg" />
               <input 
               onChange={(e) => setTweetMessage(e.target.value)}
               value={tweetMessage}
               placeholder="What's happening" type="text" />
            </div> 
            <div className="tweetBox__input2">
              <input 
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
            </div>
            

            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
      
    </div>
  );
}

export default TweetBox;
