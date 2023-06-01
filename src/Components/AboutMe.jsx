import React from "react";
import Logo from "./Assets/logooo.png";

const AboutMe = () => {
  return (
    <div
      className="about container text-center"
      style={{ fontFamily: "Libre Baskerville" }}
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
              style={{ fontSize: "10px" }}
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
            <p className=" text-center m-3">
              <span className="fw-bold"> Join</span> the Streamify community
              today and embark on a journey of discovering captivating videos,
              exploring different categories, and engaging with fellow viewers.
              We are excited to have you on board, and we look forward to
              providing you with a remarkable video streaming experience. Happy
              streaming! The Streamify Team
            </p>
          </div>

          <hr className="m-5" />
          <div className="bio row">
            <h3 className="fw-bold m-5">Meet the developers:</h3>
            <div className="col m-3">
              <h4 className="fw-bold m-3">Amina Moufakkir </h4>
              <span>
                <a
                  className="m-2"
                  style={{ color: "blue" }}
                  href="https://github.com/Amina-Moufakkir"
                >
                  {" "}
                  GitHub
                </a>

                <a
                  className="m-2"
                  style={{ color: "blue" }}
                  href="https://www.linkedin.com/in/amina-moufakkir-2a7500244/"
                >
                  LinkedIn
                </a>
              </span>

              <p className="m-3">
                As a Full Stack Developer, I bring to the table a diverse set of
                interests that shape my perspective and approach to my work. In
                my free time, I enjoy exploring the culinary arts and delving
                into books that broaden my understanding of the world. These
                hobbies have taught me the value of patience, attention to
                detail, and following a well-defined process - skills that
                directly transfer to my work as a developer.
              </p>
            </div>
            <div className="col m-3">
              <h4 className="fw-bold m-3">Nicole Rodriguez</h4>
              <span>
                <a
                  className="m-2"
                  style={{ color: "blue" }}
                  href="https://github.com/Nicolercc"
                >
                  GitHub
                </a>

                <a
                  className="m-2"
                  style={{ color: "blue" }}
                  href="https://www.linkedin.com/in/nicolerodriguezz/"
                >
                  LinkedIn
                </a>
              </span>
              <p className="m-3 ">
                As a passionate Full Stack Developer with a strong interest in
                media, I offer a diverse range of skills and experiences that
                enhance my work. In addition to my professional expertise, I
                spend my free time immersed in writing, and media creation,
                refining my storytelling abilities. This multifaceted background
                enables me to approach development projects with a creative and
                comprehensive perspective, delivering innovative solutions to
                meet diverse needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
