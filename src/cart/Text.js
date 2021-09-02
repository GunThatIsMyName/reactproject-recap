import React from "react";

const Text =({show,img})=>{
    return(
        <>
        {show ? (
            <span>{`${img.substr(0, 50)}`}</span>
          ) : (
            <span>IMG</span>
          )}
          </>
    )
}

export default Text;