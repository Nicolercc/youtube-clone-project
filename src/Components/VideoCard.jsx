import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  getRandomColor,
  generateInitials,
  getDurationText,
  formatViewCount,
} from '../helpers';
const VideoCard = ({ video }) => {
  const thumbnail =
    video.snippet.thumbnails?.medium?.url ||
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

  const initials = generateInitials(video.snippet.channelTitle);

  const randomColor = getRandomColor();

  const durationText = getDurationText(video.snippet.publishedAt);

  const viewCount = formatViewCount(video.statistics.viewCount);

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
      </Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <div className="profile-image" style={{ backgroundColor: randomColor }}>
          <span className="initials">{initials}</span>
        </div>
        <h2 className="video-title">{video.snippet.title.slice(0, 40)}...</h2>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <p className="channel">{video.snippet.channelTitle}</p>
        <AiFillCheckCircle className="channel-check" />
      </div>
      <div
        style={{
          display: 'inline-block',
          maxWidth: '100%',
        }}
      >
        {viewCount && <span className="channel">{viewCount}</span>}
        <span className="date channel">{durationText}</span>
      </div>
    </div>
  );
};

export default VideoCard;
