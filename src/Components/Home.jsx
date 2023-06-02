import React from 'react';
import { useState, useEffect } from 'react';
import { VideoList, ErrorModal } from '.';
import { fetchMostPopular } from '../yt-fetch';

function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        setHomeVideos(data);
      } catch (e) {
        setError('Oops Something went wrong! Please try again later');
        console.log(e);
      }
    };
    getMostPopular();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-around">
        <VideoList homeVideos={homeVideos} />
      </div>
      <ErrorModal
        isOpen={!!error}
        onClose={() => setError(null)}
        errorMessage={error}
      />
    </div>
  );
}

export default Home;
