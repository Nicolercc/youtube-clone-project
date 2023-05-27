import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoList } from '.';

import { getUserData } from '../yt-fetch';

const SearchResults = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const { input } = useParams();

  useEffect(() => {
    const fetchVideoId = async () => {
      try {
        const data = await getUserData(input);
        console.log(data);
        setSearchVideos(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVideoId();
  }, [input]);

  return (
    <div className="home-container">
      <VideoList videos={searchVideos} />
    </div>
  );
};

export default SearchResults;
