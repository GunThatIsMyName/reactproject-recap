import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./singleMovie";

const Router = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie/:id" component={SingleMovie} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;