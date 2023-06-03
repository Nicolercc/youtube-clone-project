import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VideoCard, ErrorModal } from '.';
import { fetchUserSearch } from '../yt-fetch';

const SearchResults = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const [error, setError] = useState(null);
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
        setError('Cannot fetch data. Sorry!');
      }
    };
    getUserSearch();
  }, [input]);

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-around">
        {searchVideos &&
          searchVideos.length > 0 &&
          searchVideos.map(
            (video) =>
              video.id.videoId &&
              video.snippet.thumbnails && (
                <div
                  className="col-md-3 pt-4"
                  onClick={() => handleVideoClick(video.id.videoId)}
                  key={video.etag}
                >
                  <VideoCard video={video} key={video.etag} />
                  <ErrorModal
                    isOpen={!!error}
                    onClose={() => setError(null)}
                    errorMessage={error}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default SearchResults;
