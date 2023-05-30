import React from 'react';
import { VideoCard, SearchCard } from '.';

function VideoList({ videos, selectedCategory, handleVideoClick }) {
  return (
    <div className="videoList">
      {videos.length > 0 &&
        videos.map((video) => {
          return video.id.videoId && video.snippet.thumbnails ? (
            selectedCategory === 'Most Popular' ? (
              <div
                onClick={() => handleVideoClick(video.id.videoId)}
                key={video.etag}
              >
                <VideoCard video={video} key={video.etag} />
              </div>
            ) : (
              <div
                onClick={() => handleVideoClick(video.id.videoId)}
                key={video.etag}
              >
                <SearchCard video={video} key={video.etag} />
              </div>
            )
          ) : null;
        })}
    </div>
  );
}

export default VideoList;
