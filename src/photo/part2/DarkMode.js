import React, { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";

const MODE_LS = "mode"

const getDarkMode = ()=>{
    let Mode;
    Mode = localStorage.getItem(MODE_LS)
    if(Mode!==null){
        return JSON.parse(Mode);
    }
}

const DarkMode = ()=>{
    const setLocalMode = ()=>{
        return localStorage.setItem(MODE_LS,darkMode)
    }
    const [darkMode,setDarkMode] = useState(getDarkMode)
    useEffect(()=>{
        document.documentElement.className=darkMode?'light-mode':"dark-mode"
        setLocalMode();
        // eslint-disable-next-line
    },[darkMode])

    return(
        <FaLightbulb onClick={()=>setDarkMode(!darkMode)} className="light" />
    )
}

export default DarkMode