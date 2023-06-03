import React from 'react';
import VideoCard from './VideoCard';
import { useNavigate } from 'react-router-dom';

function VideoList({ homeVideos }) {
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  return (
    <div className="container px-5">
      <div className="row justify-content-around">
        {homeVideos &&
          homeVideos.length > 0 &&
          homeVideos.map((video) => {
            return (
              <div
                className="col-md-3 p-4"
                onClick={() => handleVideoClick(video.id)}
                key={video.etag}
              >
                <VideoCard video={video} key={video.etag} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default VideoList;
