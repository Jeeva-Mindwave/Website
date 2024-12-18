// components/SearchAlphabet.js
import React from "react";
import SearchIcon from '../icon/Search_icon.svg'

const SearchAlphabet = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="pt-4">
      {/* Search Bar */}
      <div className="w-full !max-w-[660px] flex mb-6">
        <input
          type="text"
          placeholder="Search for resources"
          className="border rounded-md p-3 bg-secondary-dark text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <button className="bg-primary-dark text-white px-4 rounded-r-md">
          <SearchIcon />
        </button>
      </div>

      {/* Alphabet Buttons */}
      <div className="block bg-terinary-dark p-4 rounded-lg max-w-[660px] w-full">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="bg-white border border-gray-950 m-1 font-semibold rounded-md text-gray-700 w-10 h-10 hover:bg-secondary-dark hover:text-white"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAlphabet;
