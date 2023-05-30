import React from 'react';
import { VideoCard } from '.';
import { useNavigate } from 'react-router-dom';

const MostPopular = ({ videos }) => {
  console.log(videos);
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="videoList">
      {videos &&
        videos.map((video) => {
          if (video.id.videoId && video.snippet.thumbnails) {
            return (
              <div
                onClick={() => handleVideoClick(video.id.videoId)}
                key={video.etag}
              >
                <VideoCard video={video} key={video.etag} />
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default MostPopular;
