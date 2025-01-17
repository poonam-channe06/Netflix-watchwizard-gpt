import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
//   const { movieResults, movieNames } = useSelector((store) => store.get);
//   if (!movieNames) return null;
//   return (
//     <div className="p-4 m-4 bg-black text-white bg-opacity-90">
//       <div>
//         {movieNames.map((movieName, index) =>{
//             <MovieList
//             key={movieName}
//             title={movieName}
//             movies={movieResults[index]}
//              />

//         })}
//       </div>
//     </div>
//   );

return(
<div className="p-4 m-4 bg-black text-white bg-opacity-90">
  <h2>Movie suggestion : Alert this Api is not working...</h2>
</div>)

};

export default GptMovieSuggestion;

