import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideBar, CategoriesSearch, ErrorModal } from '.';
import { fetchSearchResults } from '../yt-fetch';

const CategorySearch = () => {
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('News');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  const handleSearch = async (category) => {
    try {
      const data = await fetchSearchResults(category);
      setCategoryVideos(data.items);
      setSelectedCategory(category);
    } catch (error) {
      console.log(error);
      setError('Oops something went wrong!');
    }
  };
  useEffect(() => {
    const category = selectedCategory;
    if (selectedCategory !== '') {
      handleSearch(category);
    }
  }, [selectedCategory]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="col py-3">
          {selectedCategory && (
            <>
              <CategoriesSearch
                videos={categoryVideos}
                handleVideoClick={handleVideoClick}
              />

              <ErrorModal
                isOpen={!!error}
                onClose={() => setError(null)}
                errorMessage={error}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
