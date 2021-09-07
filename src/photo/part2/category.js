import React from "react";
import { useSearhContext } from "../part2/context";

const Category = ({category})=>{
    const {setQuery,setPage} = useSearhContext();
    const handleClick = ()=>{
        setPage(1)
        setQuery(category)
    }
    return(
        <button onClick={handleClick} className="data-btn" >
            # {category}
        </button>
    )
}

export default Category;