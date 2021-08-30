import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./context";


const Modal = ()=>{
    const {modal,closeMoal} = useContext(AppContext)
    return(
        <>
            <h1>MODAL</h1>
            <Box now={modal}>
                MODAL
                <button onClick={closeMoal} >X</button>
            </Box>
        </>
    )
}

const Box = styled.div`
    width:200px;
    height:200px;
    background-color:orange;
    display:${props=>props.now?"block":"none"}
`;
export default Modal;