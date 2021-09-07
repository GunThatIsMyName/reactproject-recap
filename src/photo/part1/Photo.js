import React from "react";

const Photo = ({id,Photo, regular, username, created_at}) => {
  return (
    <div className="photo" key={id}>
      <img src={regular} alt={id} />
      <div>
        <h2>{username}</h2>
        <p>{created_at}</p>
      </div>
    </div>
  );
};

export default Photo;
