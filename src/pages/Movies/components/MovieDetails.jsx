import React from "react";
import Close from "../../../assets/close.svg";

const MovieDetails = ({ setToogleModal }) => {
  const commonParagraphCSS = "text-gray-600 text-sm";

  const movie = {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy",
    Director: "James Gunn",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "85%",
      },
      {
        Source: "Metacritic",
        Value: "67/100",
      },
    ],
    Metascore: "67",
    imdbRating: "7.6",
    imdbVotes: "774,852",
    imdbID: "tt3896198",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$389,813,101",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };

  return (
    <div className="fixed inset-0 p-2 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-3xl p-5 relative text-left overflow-y-auto max-h-[90vh] md:overflow-auto">
        <div className="flex items-center">
          <h3 className="text-gray-800 text-xl font-bold flex-1">
            {movie.Title}
          </h3>
          <button onClick={() => setToogleModal(false)}>
            <img src={Close} alt={"close"} className="w-3" />
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full rounded-lg mb-6"
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <p className={commonParagraphCSS}>
              <span className="font-bold" style={{ fontWeight: 700 }}>
                Year:
              </span>{" "}
              {movie.Year}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Rated:</span> {movie.Rated}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Released:</span> {movie.Released}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Runtime:</span> {movie.Runtime}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Genre:</span> {movie.Genre}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Director:</span> {movie.Director}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Writer:</span> {movie.Writer}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Actors:</span> {movie.Actors}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Language:</span> {movie.Language}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Country:</span> {movie.Country}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Awards:</span> {movie.Awards}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Box Office:</span> {movie.BoxOffice}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Production:</span> {movie.Production}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Website:</span> {movie.Website}
            </p>
          </div>
        </div>

        <p className={`${commonParagraphCSS} mt-6 md:mt-0`}>
          <div className="text-gray-800 font-semibold text-xl">Plot:</div>
          <span> {movie.Plot}</span>
        </p>

        <div className="my-6">
          <div className="text-gray-800 font-semibold text-xl">IMDB Stats:</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className={commonParagraphCSS}>
              <span className="font-bold">IMDB Rating:</span> {movie.imdbRating}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">Metascore:</span> {movie.Metascore}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">IMDB Votes:</span> {movie.imdbVotes}
            </p>
            <p className={commonParagraphCSS}>
              <span className="font-bold">IMDB ID:</span> {movie.imdbID}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-gray-800 font-semibold text-xl">Ratings:</div>
          <ul className="text-gray-600 text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
            {movie.Ratings.map((rating, index) => (
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
