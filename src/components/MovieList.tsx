import { useContext } from "react";
import useMovieList from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { GenresContext } from "../context/genres.context";

const MovieList = () => {
  const { genres } = useContext(GenresContext);
  const { movieLists } = useMovieList(genres);
  console.log(movieLists);
  return (
    <div className="p-3 mb-4">
      <h1 className="text-white font-bold p-5 py-8 text-4xl">Movies</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-3">
        {movieLists?.map((movieList) => (
          <div key={movieList.id}>
            <MovieCard movieResult={movieList} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
