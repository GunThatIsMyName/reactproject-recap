import React from "react";
import { useGlobalContext } from "./Context";
import Footer from "./footer";
import Main from "./main";

const Hero = () => {
    const {data}=useGlobalContext();
  return (
    <main className="main">
      <div className="title">
        <h1>YOUR BAG</h1>
      </div>
      <section>
        {data.map(item=><Main key={item.id} {...item}/>)}
      </section>
    <Footer />
    </main>
  );
};

export default Hero;

