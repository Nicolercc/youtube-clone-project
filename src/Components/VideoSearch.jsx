import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

function VideoSearch() {
  const [videoSearch, setVideoSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setVideoSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${videoSearch}`);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input"
          value={videoSearch}
          onChange={handleChange}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
}

export default VideoSearch;
