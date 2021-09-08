import React, { useRef } from "react"
import { FcSearch } from 'react-icons/fc';
import { useGlobalContext } from "./Context";

const SearchForm = ()=>{
    const {setQuery}=useGlobalContext();
    const queryBox = useRef();
    const handleSubmit =(e)=>{
        e.preventDefault();
        setQuery(queryBox.current.value);
        queryBox.current.value = '';
    }
    return(
        <form  className="search-from" onSubmit={handleSubmit} >
        <h1>Search Movies</h1>
            <input className="form-input" ref={queryBox} type="text" />
            <button type="submit">
                <FcSearch />
            </button>
        </form>
)
}

export default SearchForm;