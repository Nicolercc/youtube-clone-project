import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { categories } from "../utils";
import MostPopular from "./MostPopular";

const SideBar = ({ selectedCategory, setSelectedCategory, homeVideos }) => {
  // console.log(selectedCategory === 'MostPopular');
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
          <li className="nav-item">
            <button
              className="nav-link align-middle px-0"
              // style={{
              //   background: selectedCategory === "MostPopular" && "#FC1503",
              //   color: "#333",
              // }}
              onClick={() => {
                setSelectedCategory("MostPopular");
              }}
            >
              {" "}
              <span
                className="icon"
                style={{
                  color: selectedCategory === "MostPopular" ? "white" : "red",
                  marginRight: "15px",
                  fontSize: "20px",
                }}
              >
                <AiOutlineHome />
              </span>
              <span
                className="ms-1 d-none d-sm-inline"
                style={{
                  opacity: selectedCategory === "MostPopular" ? "1" : "0.8",
                }}
              >
                MostPopular
              </span>
            </button>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category.name}>
              <button
                className="nav-link align-middle px-0"
                // style={{
                //   background: selectedCategory === "MostPopular" && "#FC1503",
                //   color: "#333",
                // }}
                onClick={() => {
                  setSelectedCategory("MostPopular");
                }}
              >
                {" "}
                <span
                  className="icon"
                  style={{
                    color: selectedCategory === "MostPopular" ? "white" : "red",
                    marginRight: "15px",
                    fontSize: "20px",
                  }}
                >
                  {category.icon}
                </span>
                <span
                  className="ms-1 d-none d-sm-inline"
                  style={{
                    opacity: selectedCategory === "MostPopular" ? "1" : "0.8",
                  }}
                >
                  {category.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedCategory === "MostPopular" && (
        <div className="most-popular">
          <MostPopular videos={homeVideos} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
