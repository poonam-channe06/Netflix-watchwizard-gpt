import { useEffect } from "react"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"


const useUpcomingMovies = () =>{
const dispatch = useDispatch()

    const getUpcomingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1")

        const json = data.json
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[])
}


export default useUpcomingMovies;