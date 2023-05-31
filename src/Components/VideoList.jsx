import React from 'react';
import VideoCard from './VideoCard';
import { useNavigate } from 'react-router-dom';

function VideoList({ homeVideos }) {
  // console.log(homeVideos);
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  return (
    <div className="videoList">
      {homeVideos &&
        homeVideos.length > 0 &&
        homeVideos.map((video) => {
          return (
            <div onClick={() => handleVideoClick(video.id)} key={video.etag}>
              <VideoCard video={video} key={video.etag} />
            </div>
          );
        })}
    </div>
  );
}

export default VideoList;
