import React, { useEffect, useState } from "react";
import MovieSearch from "./components/MovieSearch";
import Movie from "./components/Movie";
import { useLoading } from "../../context/LoadingContext";
import { fetchMovies } from "../../services/moviesService";
import { toast } from "react-toastify";

const Movies = () => {
  const { setLoading } = useLoading();
  const [movies, setMovies] = useState([]);

  const getMovies = async (params) => {
    try {
      setLoading(true);
      const response = await fetchMovies(params);

      if (response.status !== 200) {
        throw new Error("Unable to retrieve data at the moment");
      }

      if(response.data.Error){
        toast.error(response.data.Error)
        return
      }

      setMovies(response.data.Search);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies({ s: "popular" })
  }, [])
  

  return (
    <div className="flex flex-col gap-4">
      <MovieSearch getMovies={getMovies} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <Movie movie={movie} key={index} />
        ))}
      </div>
      {
        movies.length == 0 && <div className="text-3xl"> No Movies to Display</div> 
      }
    </div>
  );
};

export default Movies;
