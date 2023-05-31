import React from 'react';
import { useState, useEffect } from 'react';
import { VideoList } from '.';
import { fetchMostPopular } from '../yt-fetch';

function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        setHomeVideos(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getMostPopular();
  }, []);

  return (
    <div className="container-fluid">
      <div className="col py-3">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <VideoList homeVideos={homeVideos} />
        )}
      </div>
    </div>
  );
}

export default Home;
