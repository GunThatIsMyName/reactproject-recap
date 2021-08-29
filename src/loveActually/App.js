import React, { useEffect, useState } from "react";
import { saying } from "./data";

const App = () => {
    const [value,setPage] =useState(0);
    const [data,setData] = useState(saying[value])
    useEffect(()=>{
        setData(saying[value])
    },[value])
  return (
    <>
        <h1>TITLE</h1>
        <form  >
            <input type="number" value={value} onChange={(e)=>setPage(e.target.value)} />
            <button>Submit</button>
        </form>
        <section>
            {data}
        </section>
    </>
  );
};

export default App;
