import { useState } from "react";
function Add() {
   const [tasks, settasks] = useState([]);
const [inputValue, addtask] = useState("");
  function handleClick() {
   settasks([...tasks,inputValue]);
   addtask("");
   console.log(tasks)

    
  }
  return (
   
    <div>
      <h1> React Todo App</h1>
      <input  value={inputValue}  onChange={(e) => addtask(e.target.value)} />
      <button onClick={handleClick}>add</button>
      {tasks.map((item)=>
         
          <li>{item}</li> 
      )}
    </div>
  );
}
export default Add;
