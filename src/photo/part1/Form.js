import React, { useRef } from "react";
import { useGlobalContext } from "./context";

const Form = () => {
    const {query,setQuery,setPage}=useGlobalContext();
    const changer = useRef();
    const handleClick = (e)=>{
        e.preventDefault()
        setQuery(changer.current.value);
        setPage(1)
        changer.current.value ='';
    }
    return (
        <>
            <form onSubmit={(e)=>handleClick(e)}>
                <input type="text" placeholder="Search" 
                ref={changer}/>
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default Form;
