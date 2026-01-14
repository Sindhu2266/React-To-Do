import React, { useState } from 'react';
import "./App.css";
import todoIcon from './Assets/list-icon.png';


const getRandomLightColor = () => {
  const r = Math.floor(Math.random() * 156 + 100);
  const g = Math.floor(Math.random() * 156 + 100);
  const b = Math.floor(Math.random() * 156 + 100);
  return `rgb(${r}, ${g}, ${b})`;
};
const App=()=> {
  const [todo,settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editid, setEditid] = useState(0);
  
const handlesubmit = (e) =>{
 e.preventDefault();

 if (editid) {
  const edittodo = todos.find((i) => i.id === editid);

  

const updatedtodos = todos.map(t =>
    t.id === editid ? { ...t, todo } : t
  );
  settodos(updatedtodos);
  setEditid(0);
  settodo("");
  return;

  
 }



 if (todo !== '') {
  settodos([
    {
      id: `${todo}-${Date.now()}`,
      todo,
      color: getRandomLightColor()
    },
    ...todos
  ]);
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
    
    <div className="title">
  <img src={todoIcon} alt="Todo Icon" className="title-icon" />
  <h1>Todo List App</h1>
</div>
    <form className="todoform" onSubmit={handlesubmit}>
      <input type='text' value={todo} onChange={(e) => settodo(e.target.value)}></input>
      <button type="submit">{editid ? "EDIT" : "ADD"}</button>
      </form> 

      <ul className="alltodos">
        {todos.map((t) => (
        <li className="singletodo"
      key={t.id}
      style={{ backgroundColor: t.color }}>
         <span className="todotext" >
          {t.todo}</span>
         
         <div className="actions">
    <button onClick={() => handleEdit(t.id)}>Edit</button>
    <button onClick={() => handledelete(t.id)}>Delete</button>
  </div>
      </li>))}
        
      </ul>


    </div>
  </div>
};

export default App;