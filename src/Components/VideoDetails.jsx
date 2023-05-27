import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

import { getVideoId } from '../yt-fetch';

function VideoDetails() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchApiInput = async () => {
      try {
        const data = await getVideoId(id);
        console.log(data);
        setVideo(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchApiInput();
  }, [id]);
  return (
    <div>
      <YouTube videoId={video.id} />
    </div>
  );
}

export default VideoDetails;
