import React, { useEffect } from "react";
const Alert =({msg,type,showAlert})=>{
    useEffect(()=>{
        const timeout = setTimeout(() => {
           showAlert();
        }, 2000);
        return ()=> clearTimeout(timeout)
     },[])
    return(
        <div style={{backgroundColor:type}} className={type}>
            <h4>{msg}</h4>
        </div>
    )
}

export default Alert;