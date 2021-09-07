import React from "react"
import { useGlobalContext } from "./context"
import Photo from "./Photo";

const Photos = ()=>{
    const {photos,loading} =useGlobalContext();
    console.log(photos,"photo")
    return(
        <>
            <section>
                {photos.length > 0 && photos.map((item)=>{
                    const {urls:{regular},id,user:{username},created_at}=item
                    const data ={regular,id,username,created_at}
                    return <Photo key={id} {...data} />
                })
            }
            </section>
            {loading && <h1>LOADING ...</h1> }
        </>
    )
}

export default Photos