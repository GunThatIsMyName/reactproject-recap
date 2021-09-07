import React, { createContext, useContext, useEffect } from "react";
import { useImageFetch } from "./useFetch";


const AppContext = createContext();

const AppProvider = ({children})=>{
    const {setQuery,loading,list,setPage}=useImageFetch();

    const handleWindow = ()=>{
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
            setPage((old)=>{
                return old +1
            })
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleWindow);
        return ()=>window.removeEventListener("scroll",handleWindow)
        // eslint-disable-next-line
    },[])

    return(
        <AppContext.Provider value={{photos:{list,loading},searh:{setQuery,setPage}}}>
            {children}
        </AppContext.Provider>
    )
}

export const usePhotoContext = ()=>{
    const {photos} = useContext(AppContext)
    return photos
}
export const useSearhContext = ()=>{
    const {searh} = useContext(AppContext)
    return searh
}

export default AppProvider;