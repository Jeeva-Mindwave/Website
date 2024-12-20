// components/SearchAlphabet.js
import React from "react";
import SearchIcon from '../icon/Search_icon.svg'
import '../styles/search.css'

const SearchAlphabet = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="pt-4">
      {/* Search Bar */}
      <div className="search-bar-blk">
        <input
          type="text"
          placeholder="Search for a topic"
        />
        <button>
          <SearchIcon />
        </button>
      </div>

      {/* Alphabet Buttons */}
      <div className="letter-blk">
        {alphabet.map((letter) => (
          <button
            key={letter}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAlphabet;
