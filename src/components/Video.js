import React from "react";
import Recommendation from "./Recommendation";

function getYouTubeId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = url.match(regExp);

  return match[7];
}

function Video(videoDetails) {
  const { id: videoId, name, url } = videoDetails.video;
  const reviews = videoDetails.reviews;

  const youtubeId = getYouTubeId(url);

  const content = (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title={videoId}
          src={`https://www.youtube.com/embed/${youtubeId}`}
        />
      </div>
      <h1 className="display-4 mt-3 mb-5 text-left">{name}</h1>
      {Recommendation(reviews)}
    </div>
  );

  return content;
}

export default Video;
