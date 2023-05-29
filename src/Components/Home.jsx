import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoList } from '.';
import { fetchMostPopular } from '../yt-fetch';

function Home() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        console.log(data);
        setVideos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getMostPopular();
  }, []);
  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="home-container">
      <VideoList videos={videos} handleVideoClick={handleVideoClick} />
    </div>
  );
}

export default Home;
