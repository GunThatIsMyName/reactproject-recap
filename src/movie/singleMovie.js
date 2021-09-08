import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { imageUrl } from "./Movie";
import { ClientID } from "./Movies";
import useFetch from "./useFetch";

const baseUrl = `https://api.themoviedb.org/3/movie/`;
const ApiKey = `?api_key=${ClientID}`;

const SingleMovie = () => {
  const {setQuery} = useGlobalContext();
  setQuery("")
  let { id } = useParams();
  let finalAPi = `${baseUrl}${id}${ApiKey}`;
  const { list, loading } = useFetch(finalAPi); 
  console.log(finalAPi,"api!")
  // JSX section 
  if (loading) {
    return <div className="loading"></div>;
  }
  const { poster_path, title, overview, release_date } = list;
  return (
    <section className="single-movie">
      <img src={`${imageUrl}${poster_path}`} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{overview}</p>
        <h4>{release_date}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
