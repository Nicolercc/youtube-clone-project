import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoList, SideBar } from '.';
import { fetchMostPopular, fetchSearchResults } from '../yt-fetch';

function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Trending');
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
      setVideos(data.items);
      setSelectedCategory(category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const category = selectedCategory;
    if (selectedCategory !== '') {
      handleSearch(category);
    }
  }, [selectedCategory]);

  return (
    <div className="main-container">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="main-content">
        {selectedCategory ? (
          <VideoList
            videos={videos}
            handleVideoClick={handleVideoClick}
            selectedCategory={selectedCategory}
          />
        ) : (
          <VideoList videos={homeVideos} handleVideoClick={handleVideoClick} />
        )}
      </div>
    </div>
  );
}

export default Home;
