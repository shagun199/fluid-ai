import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import Movie from "./components/Movie";

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Gau geung ying ging",
      Year: "2000",
      imdbID: "tt0276154",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzBjMjYzNDctNDUyYi00M2UxLWFiMDgtZjk1OTQ0MjhkZjM2XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Dei gau tin cheung",
      Year: "2001",
      imdbID: "tt0277674",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTEyZjA1YWItOTk4Yi00ZGJiLWEyNzItNDM3ZmU3N2U2YzEyXkEyXkFqcGdeQXVyMTY5NTUwNDUw._V1_SX300.jpg",
    },
    {
      Title: "Ngoh dik da gau fu mo",
      Year: "2004",
      imdbID: "tt0415177",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjg2MWFlNzEtN2JkYy00MTA5LWEyMWItOGFiODY5YjBkMWVhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Nango Gau",
      Year: "2023",
      imdbID: "tt28141408",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODI4MTZjMmItMTVhMC00YjhlLTk1OWItNWEwMDBhMGVhYmMzXkEyXkFqcGdeQXVyMTM0Mzg0NzYy._V1_SX300.jpg",
    },
    {
      Title: "Gau Premi",
      Year: "2020",
      imdbID: "tt12970150",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGU2NWFmZGEtZmIxMC00NGM2LWI4ZjctMzYxYTJkNGI0YzVkXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Bala Gau Kashi Angai",
      Year: "1977",
      imdbID: "tt2645086",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTczMDc3NjQ1NV5BMl5BanBnXkFtZTcwNzk1NjEzOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Gau Bowl",
      Year: "2005",
      imdbID: "tt28325373",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Altsasu: Gau Hura",
      Year: "2021",
      imdbID: "tt15672944",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDgwMGE5NjgtNGQzMC00NTRmLTllMDYtZWRlODY3NzllMzQ4XkEyXkFqcGdeQXVyODk0MzE3ODM@._V1_SX300.jpg",
    },
    {
      Title: "Super-GAU Tschernobyl - Sarkophag für die Ewigkeit?",
      Year: "2018",
      imdbID: "tt17633618",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Rama: Gau Ka Gangster",
      Year: "2022",
      imdbID: "tt19284222",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTBiMTFkYWItMDVhNC00MTM1LWEzMmQtMWU0NDhiNzk1NGU1XkEyXkFqcGdeQXVyODg1MTMxMzY@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="flex flex-col gap-4">
      <MovieSearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <Movie movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
