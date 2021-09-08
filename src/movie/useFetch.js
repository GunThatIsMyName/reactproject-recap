import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";



const useFetch = (url)=>{
    const {query,setQuery} = useGlobalContext();
    if(query!==""){
        console.log("@?")
        const baseUrl =`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=`
        url = `${baseUrl}${query}`
    }

    const [list,setList] = useState(null);
    const [loading,setLoading] = useState(true)
    const fetchMovie = async()=>{   
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data,"data");
            setList(data.results || data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchMovie(url)
    },[url])

    return {list,loading}
}

export default useFetch;