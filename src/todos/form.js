import React from "react";

const Form =({handleSubmit,item,handleItem,isEditing})=>{
    return(
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={item}
              onChange={handleItem}
              placeholder="grocery"
            />
            <button type="submit">{isEditing?"Edit":"Submit"}</button>
        </form>
    )
}

export default Form;