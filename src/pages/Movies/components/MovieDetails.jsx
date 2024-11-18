import React from "react";
import Close from "../../../assets/close.svg";

const MovieDetails = ({ setToogleModal, movieDetails }) => {
  const commonParagraphCSS = "text-gray-600 text-sm";

  return (
    <div className="fixed inset-0 p-2 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-3xl p-5 relative text-left overflow-y-auto max-h-[90vh] md:overflow-auto">
        <div className="flex items-center">
          <h3 className="text-gray-800 text-xl font-bold flex-1">
            {movieDetails.Title}
          </h3>
          <button onClick={() => setToogleModal(false)}>
            <img src={Close} alt={"close"} className="w-3" />
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
          <div>
            <img
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="w-full rounded-lg mb-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "";
                e.target.parentElement.innerHTML =
                  "<div>Poster image not found</div>";
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <p className={commonParagraphCSS}>
              <span className="font-bold" style={{ fontWeight: 700 }}>
                Year:
              </span>{" "}
              {movieDetails.Year}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Rated:</span> {movieDetails.Rated}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Released:</span>{" "}
              {movieDetails.Released}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Runtime:</span> {movieDetails.Runtime}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Genre:</span> {movieDetails.Genre}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Director:</span>{" "}
              {movieDetails.Director}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Writer:</span> {movieDetails.Writer}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Actors:</span> {movieDetails.Actors}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Language:</span>{" "}
              {movieDetails.Language}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Country:</span> {movieDetails.Country}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Awards:</span> {movieDetails.Awards}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Box Office:</span>{" "}
              {movieDetails.BoxOffice}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Production:</span>{" "}
              {movieDetails.Production}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Website:</span> {movieDetails.Website}
            </p>
          </div>
        </div>

        <p className={`${commonParagraphCSS} mt-6 md:mt-0`}>
          <div className="text-gray-800 font-semibold text-xl">Plot:</div>
          <span> {movieDetails.Plot}</span>
        </p>

        <div className="my-6">
          <div className="text-gray-800 font-semibold text-xl">IMDB Stats:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className={commonParagraphCSS}>
              <span className="font-bold">IMDB Rating:</span>{" "}
              {movieDetails.imdbRating}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Metascore:</span>{" "}
              {movieDetails.Metascore}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">IMDB Votes:</span>{" "}
              {movieDetails.imdbVotes}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">IMDB ID:</span> {movieDetails.imdbID}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-gray-800 font-semibold text-xl">Ratings:</div>
          <ul className="text-gray-600 text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
            {movieDetails.Ratings.map((rating, index) => (
              <li key={index}>
                <span className="font-bold">{rating.Source}:</span>{" "}
                {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
