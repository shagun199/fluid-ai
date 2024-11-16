import React, { useState } from "react";
import MovieDetails from "./MovieDetails";

const Movie = ({ movie }) => {
  const [toogleModal, setToogleModal] = useState(false);
  
  const titleClick = () => {
	setToogleModal(true)
  }
  
  return (
    <>
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 w-[100%]">
        <div className="relative w-full h-0" style={{ paddingBottom: "150%" }}>
          <img
            src={movie.Poster}
            className="absolute inset-0 w-full h-full"
            alt={movie.Title}
          />
        </div>
        <div className="p-4">
          <div
		  	onClick={titleClick}
            className="text-lg font-semibold text-gray-800 cursor-pointer lg:truncate"
            title={movie.Title}
          >
            {movie.Title}
          </div>
          <p className="text-sm text-gray-600">Released: {movie.Year}</p>
        </div>
      </div>
      {toogleModal && <MovieDetails setToogleModal={setToogleModal} />}
    </>
  );
};

export default Movie;
