import React from "react"
// import { useGlobalContext } from "./Context";
import Movie from "./Movie";
import useFetch from "./useFetch";

export const ClientID = process.env.REACT_APP_MOVIE_KEY
const PopularUrl =`https://api.themoviedb.org/3/movie/popular?api_key=${ClientID}`


const Movies = ()=>{
    const {list,loading} = useFetch(PopularUrl);
    
    return(
        <section className="movies">
            {loading && <div className="loading"></div> }
            {list && list.map(item=>{
                const {title,poster_path,release_date,id}=item
                const info = {title,poster_path,release_date,id}
                return <Movie key={id} {...info} />
            })}
        </section>
    )
}

export default Movies;