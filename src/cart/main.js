import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { DEC, INC } from "./data";

const Main = ()=>{
    const { data,controlAmount,removeItem } = useGlobalContext();
    return (
        <section>
        {data.map((item) => {
          const { id, img, price, amount, title } = item;
          return (
            <Aritcle key={id}>
              <div className="front">
                <img src={img} alt={title} />
                <div className="info">
                  <p> $ {price}</p>
                  <div className="count">stock : {amount}</div>
                </div>
              </div>
              <div className="back">
                <button onClick={()=>removeItem(id)}>remove</button>
                <button onClick={()=>controlAmount(id,"inc")} >up</button>
                <button onClick={()=>controlAmount(id,"dec")} >down</button>
              </div>
            </Aritcle>
          );
        })}
      </section>
    )
}

export default Main;

const Aritcle = styled.article`
  display: flex;
  justify-content:space-around;
`;
