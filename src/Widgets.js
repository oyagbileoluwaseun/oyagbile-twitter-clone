import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
          <h2>Latest Trends</h2>

          <TwitterTweetEmbed tweetId={"1314930659849273346"} />
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Oyagbile Oluwaseun"
          options={{ height: 400 }}
          
            />

            <TwitterShareButton
          url={"https://facebook.com/oluwaseun.oyagbile"}
          options={{ text: "#i am a software developer", via: "OyagbileOluwas1" }}
            />
      </div>
    </div>
  );
}

export default Widgets;
