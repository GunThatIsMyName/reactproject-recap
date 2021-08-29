import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleItem = (e) => setItem(e.target.value);
  const handleDelete = (id)=>{
    const item = list.filter(item=>item.id !== id)
    setList(item)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (item === "") {
      //   alert
    } else if (item && isEditing) {
      // Editing
    } else {
      const newItem = { id: Math.random(), name: item };
      setList([...list, newItem]);
      setItem("");
    }
  };
  console.log(list,"여기에는 잘나온다")
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h4>GROCERY LIST</h4>
          {alert && <p>this is for alert </p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={item}
              onChange={handleItem}
              placeholder="grocery"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <section className="list-container">
          <h3>LIST</h3>
          {list.map((item) => {
            const { name, id } = item;
            return (
              <article key={id} style={{display:"flex"}}>
                <h3>{name}</h3>
                <span onClick={()=>handleDelete(id)} >❌</span>
                <span>🅰️</span>
              </article>
            );
          })}
          <button onClick={()=>setList([])}>❗️clear All</button>
        </section>
      </div>
    </>
  );
};

export default App;
