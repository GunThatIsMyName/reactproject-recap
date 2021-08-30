import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./context";

const Sidebar = ()=>{
    const {side,closeSide}=useContext(AppContext)
    return(
        <>
            <h1>SIDEBAR</h1>
            <Box now={side}>
                SIDEBAR
                <button onClick={closeSide}>X</button>
            </Box>
        </>
    )

}
const Box = styled.div`
    top:0;
    left:0;
    width:100%;
    height:100%;
    position:absolute;
    background-color:orange;
    opacity:0.4;
    display:${props=>props.now?"block":"none"}
`;

export default Sidebar;