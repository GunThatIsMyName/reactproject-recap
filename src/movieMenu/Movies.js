import "./movie.css"
import { useState } from "react";
import Movie from "./Movie";

const Movies =({list})=>{
    const [movies,setMovies] = useState(list)
    const category = new Set(list.map(item=>item.original_language))
    const buttons = ['all',...category];
    const [nowBtn,setNowBtn] =useState(undefined)
    
    const handleClick = (hello)=>{
        const newCat = list.filter(item=>item.original_language === hello)
        if(hello === "all"){
            setMovies(list)
            setNowBtn('all')
            return 
        }
        setMovies(newCat)
        setNowBtn(hello)
        return 
    }

    return(
        <>
        <h1>Movies</h1>
        <section className="buttons">
            {buttons.map((item,idx)=><button className={item === nowBtn ?"color":""} onClick={()=>handleClick(item)} key={idx} value={item}>{item}</button>)}
        </section>
        <section>
            <Movie list={movies} />
        </section>
        </>
    )
}

export default Movies;