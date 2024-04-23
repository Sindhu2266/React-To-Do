import React, { useState } from 'react';
import "./App.css";


const App=()=> {
  const [todo,settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editid, setEditid] = useState(0);
  
const handlesubmit = (e) =>{
 e.preventDefault();

 if (editid) {
  const edittodo = todos.find((i) => i.id === editid);
  const updatedtodos = todos.map((t) => 
  t.id === edittodo.id ?
  (t = {id: t.id, todo})
  :{ id: t.id, todo: t.todo}
  );
  settodos(updatedtodos);
  setEditid(0);
  settodo("");
  return;
 }


if(todo !== ''){
  settodos([{id: `${todo} - ${Date.now()}` , todo},...todos]);
  settodo("");
}
};

const handledelete = (id) => {
const deltodo = todos.filter((to) => to.id !== id);
settodos([...deltodo]);
};

const handleEdit = (id) => {
  const edittodo = todos.find((i) => i.id === id );
  settodo(edittodo.todo);
  setEditid(id);
};


  return <div className="App">
    <div className="container">
    <h1>Todo List App</h1>
    <form className="todoform" onSubmit={handlesubmit}>
      <input type='text' value={todo} onChange={(e) => settodo(e.target.value)}></input>
      <button type="submit">{editid ? "Edit" : "Go"}</button>
      </form> 
      <ul className="alltodos">
        {todos.map((t) => (
        <li className="singletodo">
         <span className="todotext" key={t.id}>
          {t.todo}</span>
         <button onClick={() => handleEdit(t.id)}>Edit</button> 
         <button onClick={() => handledelete(t.id)}> Delete</button>
      </li>))}
        
      </ul>
    </div>
  </div>
};

export default App;