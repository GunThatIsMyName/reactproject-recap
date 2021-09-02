import React from "react";
import Main from "./Main";
import Navbar from "./Navba";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

const App = ()=>{
    return(
        <>
            <Navbar />
            <Main />
            <SubMenu />
            <Sidebar />
        </>
    )
}

export default App;