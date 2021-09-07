import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const {query,photos,page,setPage,loading,setQuery} = useFetch();
  useEffect(()=>{
    const event = window.addEventListener("scroll",()=>{
      const innerHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      if( innerHeight+scrollY >= scrollHeight-2){
        setPage((old)=>{
          return old +1
        })
      }
    })
    return ()=>window.removeEventListener('scroll',event)
  },[])
  return (
    <AppContext.Provider value={{loading,photos,setPage, query, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
