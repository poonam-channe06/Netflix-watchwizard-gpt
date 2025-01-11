import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import {  BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 opacity-90">
        <img src={BG_IMG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
