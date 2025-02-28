import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) =>{
    if(!posterPath) return  null;
    return (
        <div className="w-48 md:w-48 pr-2">
           <img  src={IMG_CDN_URL + posterPath}/>
        </div>
    )
}

export default MovieCard;