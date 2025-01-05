import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import SecondContainer from "./SecondContainer";
import MainContainer from "./TitleContainer";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondContainer />

      {/* 
      - Main container
         -video background 
         - video title

        - Second container
         - movielist * n
         - cards * n */}
    </div>
  );
};

export default Browse;
