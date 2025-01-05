import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log("popularMovies===>", movies.popularMovies);

  return (
    <div className=" bg-black">
      <div className="-mt-44 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        <MovieList title={"now Playing"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
