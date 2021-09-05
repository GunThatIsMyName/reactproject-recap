import React, { createContext, useContext, useEffect, useState } from "react"
import { PAGE } from "./page";
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const AppContext = createContext();
const AppProvider  = ({children})=>{
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const [page,setPage]=useState(0);
    const [follower,setFollower]=useState(null)
    const getFollowers = async()=>{
        const getData = await fetch(url);
        const Fdata = await getData.json();
        setData(PAGE(Fdata))
        setLoading(false)
    }
    useEffect(()=>{
        getFollowers();
        setFollower(data[page]);
    },[loading,page])
    return(
        <AppContext.Provider value={{loading,data,follower,page,setPage}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=> useContext(AppContext);

export default AppProvider