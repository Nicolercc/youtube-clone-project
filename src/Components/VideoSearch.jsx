import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoSearch() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${input}`);
    setInput('');
  }

  return (
    <>
      <form className="navbar search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input"
          value={input}
          onChange={handleChange}
        />
        <span className="material-icons search-icon">search</span>
      </form>
    </>
  );
}

export default VideoSearch;
