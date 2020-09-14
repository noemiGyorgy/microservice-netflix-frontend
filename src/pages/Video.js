import React, { useState, useEffect } from "react";
import Recommendation from "../components/Recommendation";
import SpinnerDot from "../components/SpinnerDot";
import { useParams } from "react-router";
import axios from "axios";

function getYouTubeId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = url.match(regExp);

  return match[7];
}

function Video() {
  const [video, setVideo] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id: videoId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8762/video/videos/details/${videoId}`)
      .then((response) => {
        console.log(response.data);
        setVideo(response.data.video);
        setReviews(response.data.reviews);
        setIsLoading(false);
      });
  }, [videoId]);

  let content = SpinnerDot();

  if (!isLoading && video.url !== undefined) {
    const { name, url } = video;
    const youtubeId = getYouTubeId(url);

    content = (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            title={videoId}
            src={`https://www.youtube.com/embed/${youtubeId}`}
          />
        </div>
        <h1 className="display-4 mt-3 mb-5 text-left">{name}</h1>
        <Recommendation
          videoId={videoId}
          setReviews={setReviews}
          reviews={reviews}
        />
      </div>
    );
  }
  return content;
}

export default Video;
