import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Form from "./form";
import List from "./List";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null)
  const [alert,setAlert] = useState({show:false,msg:"",type:""})
  const handleItem = (e) => setItem(e.target.value);
  const handleDelete = (id)=>{
    const item = list.filter(item=>item.id !== id)
    setList(item)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (item === "") {
      //   alert
      showAlert(true,"enter your item","red")
    } else if (item && isEditing) {
      // Editing
      setList(itemEdit);
      setItem("")
      setEditID(null)
      showAlert(true,"ITEM EDITED")
      setIsEditing(false)
    } else {
      const newItem = { id: Math.random(), name: item };
      setList([...list, newItem]);
      setItem("");
      showAlert(true,"This item added","green")
    }
  };
  const itemEdit = ()=>{
    const EditItem = list.map(ite=>{
      if(ite.id === editID){
        return {...ite,name:item}
      }
      return ite;
    });
    return EditItem;
  }
  const showAlert = (show=false,msg="",type="")=>{
    setAlert({show,msg,type});
  }
  console.log("@22")
  const handleEdit = (id)=>{
    const EditItem = list.find(item=>item.id === id);
    console.log(EditItem,"??????")
    setIsEditing(isEditing?false:true);
    setEditID(id);
    setItem(isEditing?"":EditItem.name)
    showAlert(true,isEditing?"Normal mode":"Edit Mode",isEditing?"orange":"yellow")
  }
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h4>GROCERY LIST</h4>
          {alert.show && <Alert {...alert} list={list} showAlert={showAlert}/>}
          <Form handleSubmit={handleSubmit} isEditing={isEditing}item={item} handleItem={handleItem} />
        </div>
        <section className="list-container">
          {list.length > 0 && <List list={list}handleEdit={handleEdit} handleDelete={handleDelete} setList={setList} />}
        </section>
      </div>
    </>
  );
};

export default App;
