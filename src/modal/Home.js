import React, { useContext } from "react";
import { AppContext } from "./context";

const Home = ()=>{
    const {openModal,openSide}=useContext(AppContext);
    return(
        <>
            <h1>HOME</h1>
            <button onClick={openModal} >modal</button>
            <button onClick={openSide} >sidebar</button>
        </>
    )

}

export default Home;