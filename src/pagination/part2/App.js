import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import Follower from "./Follower";

const App = ()=>{
    const {loading,follower,data,page,setPage } = useGlobalContext();
    console.log(data.length,"fol")
    console.log(page)
    return(
        <main>
            <h1>{loading?"LOADING ...":"PAGINATION"}</h1>
            <div className="data">
                {follower && follower.map((item,idx)=>{
                    const {avatar_url:img,html_url:url,login:name} = item;
                    const follInfo = {url,img,name}
                    return <Follower key={item.id} {...follInfo} />
                })}
            </div>
            <div>
                <button onClick={()=>setPage(page===0? data.length-1 : page-1)}>pre</button>
                <button onClick={()=>setPage(page=== data.length-1?0:page+1)} >next</button>
                {data.map((item,idx)=>{
                    return (
                        <button onClick={()=>setPage(idx)} style={{opacity:page===idx?"0.7":""}} key={idx}>{idx+1}</button>
                    )
                })}
            </div>
        </main>
    )
}

export default App;