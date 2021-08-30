import React, { useState } from "react"

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [modal,setModal] =useState(false);
    const [side,setSide] =useState(false);

    const openModal = ()=>{
        setModal(true);
    }
    const closeMoal = ()=>{
        setModal(false);
    }
    const openSide = ()=>{
        setSide(true);
    }
    const closeSide = ()=>{
        setSide(false);
    }
    
    return(
        <AppContext.Provider value={{modal,side,openModal,closeMoal,openSide,closeSide}} >
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider};