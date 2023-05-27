import React from 'react';
import { VideoCard } from '.';

function VideoList({ videos }) {
  return (
    <div className="videoList">
      {videos.length > 0 &&
        videos.map((video) => <VideoCard video={video} key={video.etag} />)}
    </div>
  );
}

export default VideoList;
