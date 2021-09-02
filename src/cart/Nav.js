import React from "react";
import { FcGoogle,FcComments } from "react-icons/fc";
import styled from "styled-components";
import { useGlobalContext } from "./Context";


const Nav = ()=>{
    const {amount} =useGlobalContext();
    return (
        <Ul>
            <FcGoogle style={{fontSize:"4rem"}} />
            <h1>TITLE</h1>
            <div className="bag">
                <FcComments style={{fontSize:"2.7rem"}}/>
                <Ball>{amount}</Ball>
            </div>
        </Ul>
    )
}

export default Nav;




const Ul = styled.ul`
    background-color:rgba(0,0,00,0.9);
    padding:8px 12px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;
const Ball = styled.span`
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:50%;
    background-color:red;
    display:block;
    position:absolute;
    top:-10px;
    right:-20px;
    font-size:25px;
    color:#fff;
`;