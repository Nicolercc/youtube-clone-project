import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VideoList, SideBar, MostPopular } from ".";
import { fetchMostPopular, fetchSearchResults } from "../yt-fetch";

function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [CategoryVideos, setCategoryVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const navigate = useNavigate();

  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        console.log(data);
        setHomeVideos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getMostPopular();
  }, []);
  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  const handleSearch = async (category) => {
    try {
      // const query = category;
      const data = await fetchSearchResults(category);
      setCategoryVideos(data.items);
      setSelectedCategory(category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const category = selectedCategory;
    if (selectedCategory !== "") {
      handleSearch(category);
    }
  }, [selectedCategory]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          videos={homeVideos}
        />

        <div className="col py-3">
          {selectedCategory ? (
            <VideoList
              videos={CategoryVideos}
              handleVideoClick={handleVideoClick}
              selectedCategory={selectedCategory}
            />
          ) : (
            <MostPopular
              videos={homeVideos}
              handleVideoClick={handleVideoClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
