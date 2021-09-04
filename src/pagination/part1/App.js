import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import useFetch  from "./useFetch"

const App = ()=>{
    const {data,loading} =useFetch();
    const [followers,setFollowers]=useState(null);
    const [page,setPage]=useState(0)

    console.log(data,"data")
    
    useEffect(()=>{
        setFollowers(data[page])
    },[loading,page,data])

    return(
        <main>
            <div className="title">
                <h1>Pagination</h1>
            </div>
            <section>
                {loading?<h1>LOADING . . .</h1> : <h1>folloower</h1> }
                <main>
                    
                {followers && followers.map((item)=>{
                    return (
                        <div key={item.id}>
                            <img width="200px" src={item.avatar_url} alt="" />
                            <h1>{item.login}</h1>
                            <button>
                                view profile
                            </button>
                        </div>
                    )
                })}
                </main>
                <div className="button">
                    {data.map((item,idx)=>{
                        return (
                            <button key={idx} onClick={()=>{setPage(idx)}}>
                                {idx}
                            </button>
                        )
                    })}
                    <button onClick={()=>setPage(page===0?data.length-1 : page-1 )} >ㅇㅣ저ㄴ</button>
                    <button>앞</button>
                </div>
            </section>
        </main>
    )
}

export default App;