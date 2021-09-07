import React from "react";
import DarkMode from "./DarkMode";
import Photos from "./Photos";
import SearchForm from "./SearchForm";
import "./style.css"

const App = ()=>{
    return(
        <main>
            <DarkMode />
            <SearchForm />
            <Photos />
        </main>
    )
}

export default App;