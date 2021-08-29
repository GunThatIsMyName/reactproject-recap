import React, { useEffect, useState } from "react";
import Loader from "./loader";
import Movies from "./Movies";
const api = 'https://api.themoviedb.org/3/movie/top_rated?api_key=61fd1ed95a3194d58014b1ebda72d539'


function App() {
  const [list,setList] = useState([])
  const [loading,setLoading] = useState(true)
  const getApi = async()=>{
    try{
      const getData = await fetch(api)
      const {results} = await getData.json()
      setList(results)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getApi();
  },[])
  console.log(list,"ㄹㅣ스트")
  return (
    <div className="App">
      <h1>Top of the Cafe</h1>
      {loading?<Loader />:<Movies list={list}/>}
    </div>
  );
}

export default App;
