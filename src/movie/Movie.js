import React from "react"
import { Link } from "react-router-dom"
export const imageUrl = `https://image.tmdb.org/t/p/w300`

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movie = ({title,poster_path,release_date,id})=>{
    return(
        <>
        <Link className="movie" to={`/movie/${id}`}>
            <article>
                <img src={poster_path?`${imageUrl}${poster_path}`:url} alt={title} />
                <div className="movie-info">
                    <h4 className="title">{title}</h4>
                    <p>Date : {release_date}</p>
                </div>
            </article>
        </Link>
        </>
    )
}

export default Movie;