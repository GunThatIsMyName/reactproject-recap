import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        max-width:100vw;
        margin:auto;
        background-color:#0C1117;
        text-align:center;
        color:#fff;
        font-size:1.5rem;
        font-family: 'Nanum Pen Script', cursive;
    }
`;

export default GlobalStyle;