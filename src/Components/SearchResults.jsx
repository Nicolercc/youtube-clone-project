import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VideoCard } from '.';

import { fetchUserSearch } from '../yt-fetch';

const SearchResults = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const { input } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserSearch = async () => {
      try {
        const data = await fetchUserSearch(input);
        console.log(data);
        setSearchVideos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getUserSearch();
  }, [input]);

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="home-container">
      {searchVideos.length > 0 &&
        searchVideos.map(
          (video) =>
            video.id && (
              <div onClick={() => handleVideoClick(video.id)} key={video.etag}>
                <VideoCard video={video} key={video.etag} />
              </div>
            )
        )}
    </div>
  );
};

export default SearchResults;
