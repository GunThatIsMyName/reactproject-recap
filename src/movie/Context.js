import React, { createContext, useContext,  useFetch,useState } from "react";


const AppContext = createContext();

const AppProvider = ({children})=>{
    const [query,setQuery] = useState('')
    
    return(
        <AppContext.Provider value={{query,setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider