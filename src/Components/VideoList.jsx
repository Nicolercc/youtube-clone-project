import React from 'react';
import { VideoCard, SearchCard } from '.';

function VideoList({ videos, selectedCategory }) {
  return (
    <div className="videoList">
      {videos.length > 0 &&
        videos.map((video) => {
          return selectedCategory ? (
            <SearchCard video={video} key={video.etag} />
          ) : (
            <VideoCard video={video} key={video.etag} />
          );
        })}
    </div>
  );
}

export default VideoList;
