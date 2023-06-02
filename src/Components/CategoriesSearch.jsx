import React from 'react';
import { VideoCard } from '.';
import { useNavigate } from 'react-router-dom';

const CategoriesSearch = ({ videos }) => {
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-around">
        {videos &&
          videos.map((video) => {
            if (video.id.videoId && video.snippet.thumbnails) {
              return (
                <div
                  className="col-md-3 py-4"
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
    </div>
  );
};

export default CategoriesSearch;
