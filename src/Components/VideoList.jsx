import React from 'react';
import { VideoCard } from '.';

function VideosList({ videos }) {
  return (
    <div className="videoList">
      {videos.length > 0 &&
        videos.map((video) => (
          <VideoCard video={video} key={video.id.videoId} />
        ))}
    </div>
  );
}

export default VideosList;
