import React from "react";
import { useState, useEffect } from "react";
import { VideoList } from ".";
import { getData } from "../yt-fetch";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const data = await getData();
        console.log(data);
        setVideos(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchApiData();
  }, []);

  return (
    <div className="home-container">
      <VideoList videos={videos} />
    </div>
  );
}

export default Home;
