import React from 'react';
import Logo from './Assets/logooo.png';

const AboutMe = () => {
  return (
    <div
      className="about container text-center"
      style={{ fontFamily: 'Libre Baskerville' }}
    >
      <h3 className="m-4 mt-5 fw-bold"> Welcome to Streamify!</h3>
      <div className="row">
        <div className="col-sm">
          <p>
            <br />
            We are a passionate team of developers and content enthusiasts
            dedicated to providing you with the ultimate video streaming
            experience. Our platform is designed to connect you with a vast
            array of videos, ranging from music and entertainment to tutorials,
            games, and much more.
          </p>
        </div>

        <div className="row align-items m-5">
          <div className="col-md-4  p-5 ">
            <p className="text-center">
              One of the key features of Streamify is the ability to filter
              videos based on categories. We understand that each user has their
              own unique preferences, and with our category filtering feature,
              you can easily explore videos specific to your interests.
            </p>
          </div>
          <div className="col-md-4 p-5 ">
            <img
              className="rounded "
              src={Logo}
              alt="logo"
              style={{ fontSize: '10px' }}
            />
          </div>
          <div className="col-md-4 ms-auto  p-3">
            <p className="text-center">
              <span className="fw-bold"> Additionally,</span> we encourage user
              engagement and interaction through our comments feature. We
              believe that watching videos should be a social experience, and
              therefore, we provide a platform for users to leave comments and
              engage in discussions with fellow viewers. Share your thoughts,
              ask questions, and connect with others who share your passion for
              the videos you love.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className=" text-center m-5">
              <span className="fw-bold"> Join</span> the Streamify community
              today and embark on a journey of discovering captivating videos,
              exploring different categories, and engaging with fellow viewers.
              We are excited to have you on board, and we look forward to
              providing you with a remarkable video streaming experience. Happy
              streaming! The Streamify Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
