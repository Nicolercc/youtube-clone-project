import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

import { fetchVideoByID } from '../yt-fetch';

function VideoDetails() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getVideoByID = async () => {
      try {
        const data = await fetchVideoByID(id);
        console.log(data);
        setVideo(data);
      } catch (e) {
        console.log(e);
      }
    };
    getVideoByID();
  }, [id]);
  if (!video) {
    return <div>Loading...</div>;
  }
  const { title, channelTitle, publishedAt } = video.snippet;
  const publishedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <div className="video-details">
      <div className="video-player">
        <YouTube videoId={id} />
      </div>
      <div className="video-info">
        {video.snippet && (
          <>
            <h3>{title}</h3>
            <h4 className="channel-title">{channelTitle}</h4>
            <p className="published-date">{publishedDate}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default VideoDetails;
