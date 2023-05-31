import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SearchCard } from '.';

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
    <div className="videoList">
      {searchVideos &&
        searchVideos.length > 0 &&
        searchVideos.map(
          (video) =>
            video.id.videoId &&
            video.snippet.thumbnails && (
              <div
                className="video"
                onClick={() => handleVideoClick(video.id.videoId)}
                key={video.etag}
              >
                <SearchCard video={video} key={video.etag} />
              </div>
            )
        )}
    </div>
  );
};

export default SearchResults;
