import React, { useState } from "react";
import Search from "../../../assets/search.svg";

const MovieSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div class="flex px-4 py-3 rounded-md border-2 overflow-hidden max-w-md mx-auto">
      <input
        type="email"
        placeholder="Search Movie..."
        class="w-full outline-none bg-transparent text-gray-600 text-sm"
        value={searchInput}
        onChange={searchInputChange}
      />
      <img src={Search} />
    </div>
  );
};

export default MovieSearch;
