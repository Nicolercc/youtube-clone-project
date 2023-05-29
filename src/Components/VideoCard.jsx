import React from 'react';
import { Link } from 'react-router-dom';
const VideoCard = ({ video }) => {
  const thumbnail =
    video.snippet.thumbnails?.medium?.url ||
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

  const publishedDate = new Date(video.snippet.publishedAt);
  const currentDate = new Date();
  const timeDifference = currentDate - publishedDate;

  let durationText;

  if (timeDifference < 3600000) {
    // Less than 1 hour
    const minutes = Math.floor(timeDifference / 60000);
    durationText = `${minutes} minutes ago`;
  } else if (timeDifference < 86400000) {
    // Less than 1 day
    const hours = Math.floor(timeDifference / 3600000);
    durationText = `${hours} hours ago`;
  } else if (timeDifference < 2592000000) {
    // Less than 1 month
    const days = Math.floor(timeDifference / 86400000);
    durationText = `${days} days ago`;
  } else if (timeDifference < 31536000000) {
    // Less than 1 year
    const months = Math.floor(timeDifference / 2592000000);
    durationText = `${months} months ago`;
  } else {
    // More than 1 year
    const years = Math.floor(timeDifference / 31536000000);
    durationText = `${years} years ago`;
  }

  <span className="published-date">{durationText}</span>;

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
        <h2 className="video-title">{video.snippet.title}</h2>
      </Link>
      {/* <p className="channel">{video.snippet.channelTitle}</p>
      <span className="channel">
        {video.statistics.viewCount > 1000
          ? `${Math.floor(video.statistics.viewCount / 1000)}K views`
          : `${video.statistics.viewCount} views`}
      </span>
      <span className="date channel">{durationText}</span> */}
    </div>
  );
};

export default VideoCard;
