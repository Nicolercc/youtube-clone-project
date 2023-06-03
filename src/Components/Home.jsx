import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdRoundaboutRight } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { VideoList, ErrorModal } from '.';
import { fetchMostPopular } from '../yt-fetch';

function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        setHomeVideos(data);
      } catch (e) {
        setError('Oops Something went wrong! Please try again later');
        console.log(e);
      }
    };
    getMostPopular();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col bg-light home-side">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100 ">
            <ul className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
              <li className="nav-item">
                <NavLink to="/" className="nav-link align-middle px-0 mt-5">
                  {' '}
                  <span className="icon">
                    <AiOutlineHome />
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link align-middle px-0 mt-5"
                >
                  {' '}
                  <span className="icon">
                    <MdRoundaboutRight />
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categories"
                  className="nav-link align-middle px-0 mt-5"
                >
                  {' '}
                  <span className="icon">
                    <BiCategory />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <VideoList homeVideos={homeVideos} />
        </div>
      </div>
      <ErrorModal
        isOpen={!!error}
        onClose={() => setError(null)}
        errorMessage={error}
      />
    </div>
  );
}

export default Home;
