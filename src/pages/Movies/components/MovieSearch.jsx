import debounce from "debounce";
import React, { useCallback, useState } from "react";
import Search from "../../../assets/search.svg";

const MovieSearch = ({ getMovies }) => {
  const [searchInput, setSearchInput] = useState("");

  const debouncedGetMovies = useCallback(
    debounce((title) => {
      getMovies({ s: title });
    }, 300),
    []
  );

  const searchInputChange = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
    if (searchInput.length > 3) {
      debouncedGetMovies(searchInput.toLowerCase());
    } else if (searchInput.length == 0) {
      getMovies({ s: "popular" });
    }
  };

  return (
    <div className="flex px-4 py-3 rounded-md border-2 overflow-hidden max-w-md mx-auto">
      <input
        type="email"
        placeholder="Search Movie..."
        className="w-full outline-none bg-transparent text-gray-600 text-sm"
        value={searchInput}
        onChange={searchInputChange}
      />
      <img src={Search} />
    </div>
  );
};

export default MovieSearch;
