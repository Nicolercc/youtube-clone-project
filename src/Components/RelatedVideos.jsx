import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRelatedVideos } from "../yt-fetch";
import { SearchCard, ErrorModal } from ".";

const RelatedVideos = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getRelatedVideos = async () => {
      try {
        const data = await fetchRelatedVideos(id);
        setRelatedVideos(data);
        console.log(data);
        //   setIsLoading(false);
      } catch (e) {
        console.log(e);
        setError("Unable to fetch data. Try again later!");
      }
    };
    getRelatedVideos();
  }, [id]);

  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div
      className="row"
      // style={{ marginLeft: '20rem' }}
    >
      {relatedVideos &&
        relatedVideos.length > 0 &&
        relatedVideos.map((video) => {
          return (
            <div
              onClick={() => handleVideoClick(video.id.videoId)}
              key={video.etag}
            >
              <SearchCard video={video} key={video.etag} />
            </div>
          );
        })}
      <ErrorModal
        isOpen={!!error}
        onClose={() => setError(null)}
        errorMessage={error}
      />
    </div>
  );
};

export default RelatedVideos;
