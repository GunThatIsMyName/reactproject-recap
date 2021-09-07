import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Category from "./category";
import { useSearhContext } from "./context";
import { data } from "./data";

const SearchForm = ()=>{
    const {setQuery,setPage} = useSearhContext();
    const textRef = useRef();
    const handleSubmit =(e)=>{
        e.preventDefault();
        setQuery(textRef.current.value)
        setPage(1)
        textRef.current.value='';
    }

    return(
        <section className="search">
            <form onSubmit={handleSubmit} className="search-form">
                <input ref={textRef} placeholder="Search" type="text" className="form-input" />
                <button className="submit-btn">
                    <FaSearch />
                </button>
            </form>
            <div className="category">
                <h4>TREND KEYWORDS : </h4>
                {data.map(item=>{
                    return(
                        <Category key={item.id} category={item.category} />
                    )
                })}
            </div>
        </section>
    )
}

export default SearchForm;