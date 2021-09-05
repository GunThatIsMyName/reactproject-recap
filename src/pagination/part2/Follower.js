import { useState } from "react";

const Follower = ({url,img,name})=>{
    const [show,setShow]=useState(false)
    return(
        <section>
            <h1>{name}</h1>
            <p>{show?`${url.substr(0,20)}...`:url}</p>
            <p onClick={()=>setShow(show?false:true)} >{show?"show more":"show less"}</p>
        </section>
    )
}

export default Follower;