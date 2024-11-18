import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import { fetchMovie } from "../../../services/moviesService";
import { useLoading } from "../../../context/LoadingContext";

const Movie = ({ movie }) => {
  const { setLoading } = useLoading();
  const [toogleModal, setToogleModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const titleClick = async (movieId) => {
    try {
      setLoading(true);
      const response = await fetchMovie(movieId);

      if (response.status !== 200) {
        throw new Error("Unable to retrieve data at the moment");
      }

      setMovieDetails(response.data);
      setToogleModal(true);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 w-[100%]">
        <div className="relative w-full h-0" style={{ paddingBottom: "150%" }}>
          <img
            src={movie.Poster}
            className="absolute inset-0 w-full h-full"
            alt={movie.Title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "";
              e.target.parentElement.innerHTML =
                '<div>Poster image not found</div>';
            }}
          />
        </div>
        <div className="p-4">
          <div
            onClick={() => titleClick(movie.imdbID)}
            className="text-lg font-semibold text-gray-800 cursor-pointer lg:truncate"
            title={movie.Title}
          >
            {movie.Title}
          </div>
          <p className="text-sm text-gray-600">Released: {movie.Year}</p>
        </div>
      </div>
      {toogleModal && (
        <MovieDetails
          setToogleModal={setToogleModal}
          movieDetails={movieDetails}
        />
      )}
    </>
  );
};

export default Movie;
