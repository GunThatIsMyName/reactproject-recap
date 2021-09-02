import React from "react";
import { useGlobalContext } from "./Context";

const Footer =()=>{
    const { price,clearAll } = useGlobalContext();
    return(
<section className="footer">
          <div className="total">
              <h1>total price : </h1>
              <h1>$ {price}</h1>
          </div>
          <button onClick={()=>clearAll()} >clear all</button>
      </section>
    )
}

export default Footer;