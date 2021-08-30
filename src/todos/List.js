import React from "react";
import { FcCloth,FcApproval } from "react-icons/fc";

const List = ({ list, handleDelete,setList,handleEdit }) => {
  return (
    <div className="section-container">
        <h3>LIST</h3>
      {list.map((item) => {
        const { id, name } = item;
        return (
          <article style={{display:"flex"}} key={id}>
                <p className="title">{name}</p>
                <div className="btn-container">
                <button onClick={()=>handleEdit(id)} className="edit-btn" ><FcCloth /></button>
                <button onClick={()=>handleDelete(id)} className="delete-btn"><FcApproval /></button>
                </div>
          </article>
        );
      })}
      <button onClick={()=>setList([])}>❗️clear All</button>
    </div>
  );
};

export default List;
