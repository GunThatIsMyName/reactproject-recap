import React from "react";
import { useGlobalContext } from "./Context";
import Hero from "./Hero";
import Nav from "./Nav";
import GlobalStyle from "./styles/styles";

const App = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      <GlobalStyle />
      <Nav />
      {loading ? <h1>LOADING . . .</h1> : <Hero />}
    </>
  );
};

export default App;
