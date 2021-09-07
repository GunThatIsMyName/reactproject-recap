import React from "react";
import { usePhotoContext } from "./context";
import Photo from "./Photo";
import { VscLoading } from "react-icons/vsc";

const Photos = ()=>{
    const {list,loading} =usePhotoContext()
    console.log(list,"list")
    return(
        <section className="photos">
            <div className="photos-center">
                {list.map(item=>{
                    const {id,likes,alt_description,urls:{regular},user:{username,portfolio_url,profile_image:{medium}}}=item
                    const info = {id,likes,alt_description,regular,username,portfolio_url,medium}
                    return <Photo key={id} {...info} />
                })}
            </div>
            {loading && <div className="loading">
            <VscLoading />
            </div> }
        </section>
    )
}

export default Photos;