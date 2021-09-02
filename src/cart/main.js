import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { DEC, INC } from "./data";
import Text from "./Text";

const Main = ({id, img, price, amount, title}) => {
  const container = useRef();
  const {controlAmount, removeItem } = useGlobalContext();
  const [show, setShow] = useState(false);
  return (
          <Aritcle key={id}>
            <div className="front" ref={container}>
              <img src={img} alt={title} />
              <div className="info">
                <p> $ {price}</p>
                <div className="count">stock : {amount}</div>
                <Text img={img} show={show} />
              </div>
            </div>
            <div className="back">
              <button onClick={()=>setShow(!show)}>inofo</button>
              <button onClick={() => removeItem(id)}>remove</button>
              <button onClick={() => controlAmount(id, "inc")}>up</button>
              <button onClick={() => controlAmount(id, "dec")}>down</button>
            </div>
          </Aritcle>
        );
};

export default Main;

const Aritcle = styled.article`
  display: flex;
  justify-content: space-around;
`;
