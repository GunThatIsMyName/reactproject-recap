import React, { useEffect, useState } from "react"

const baseUrl = "https://api.unsplash.com/";

export const useFetch = ()=>{
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [photos, setPhotos] = useState([]);
    const [page,setPage] = useState(1)

    const getImages = async () => {
        setLoading(true);
        let clientId = `?client_id=${process.env.REACT_APP_PHOTO_KEY}`;
        let api = `${baseUrl}/photos/${clientId}&page=${page}`
        if(query){
          api = `${baseUrl}/search/photos/${clientId}&query=${query}&page=${page}`
        }else{
          api = `${baseUrl}/photos/${clientId}&page=${page}`;
        }
        try {
          const response = await fetch(api);
          const data = await response.json();
          console.log(api,"apdi ad")
          console.log(data,"what data")
          setPhotos((old)=>{
            if(query && page ===1){
              return data.results;
            }else if (query){
              return [...old,...data.results]
            }
            else{
              return [...old,...data]
            }
          })
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getImages();
      }, [page,query]);
    
      return { query,
        photos,
        page,
        setPage,loading,setQuery}
}

