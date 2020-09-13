import { useParams } from "react-router-dom";
import useApiCall from "../ApiCall";
import SpinnerDot from "../components/SpinnerDot";
import Video from "../components/Video";

function VideoPage() {
  let { id } = useParams();

  let content = SpinnerDot();

  const [videoDetails, videoDetailsIsLoading] = useApiCall(
    `http://localhost:8762/video/videos/details/${id}`
  );

  if (!videoDetailsIsLoading && videoDetails) {
    content = Video(videoDetails);
  }

  return content;
}

export default VideoPage;
