import React from "react";
import { useState, useEffect } from "react";
import { VideoList, ErrorModal } from ".";
import { fetchMostPopular } from "../yt-fetch";

function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        setHomeVideos(data);
        // setIsLoading(false);
      } catch (e) {
        setError("Opps Something went wrong! Please try again later");
        console.log(e);
      }
    };
    getMostPopular();
  }, []);

  return (
    <div className="container-fluid">
      <div className="col py-3">
        {/* {isLoading ? (
          <div>Loading...</div>
        ) : ( */}
        <>
          <VideoList homeVideos={homeVideos} />
          <ErrorModal
            isOpen={!!error}
            onClose={() => setError(null)}
            errorMessage={error}
          />
        </>
        {/* )} */}
      </div>
    </div>
  );
}

export default Home;
