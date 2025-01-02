import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondContainer from "./SecondContainer";
import MainContainer from "./TitleContainer";


const Browse = () => {
  useNowPlayingMovies();

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
