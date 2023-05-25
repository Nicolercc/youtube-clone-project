import React from 'react';

const VideoCard = ({ video }) => {
  const thumbnail =
    video.snippet.thumbnails?.medium?.url ||
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';
  return (
    <div>
      <img src={thumbnail} alt="thumbnail" />
      <h2>{video.snippet.title}</h2>
    </div>
  );
};

export default VideoCard;
