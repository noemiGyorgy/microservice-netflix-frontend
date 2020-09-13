import React from "react";
import useApiCall from "../ApiCall";
import { Link } from "react-router-dom";

function Main() {
  const [videos, videosAreLoading] = useApiCall(
    "http://localhost:8081/video/list"
  );

  let videoList = <div></div>;

  if (!videosAreLoading && videos) {
    videoList = (
      <div>
        <ul className="list-group text-dark text-left">
          {videos.map((video) => (
            <Link to={`/video/${video.id}`} key={video.id}>
              <li className="list-group-item" key={video.id}>
                {video.id} {video.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  return videoList;
}

export default Main;
