import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const thumbnail =
    video.snippet.thumbnails?.medium?.url ||
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
        <h2 className="video-title">{video.snippet.title.slice(0, 60)}</h2>
      </Link>
    </div>
  );
};

export default VideoCard;
