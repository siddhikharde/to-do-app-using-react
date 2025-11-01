import React, { useState } from 'react'
import {Moon, Trash, Plus} from 'lucide-react'
import "./App.css";
import TaskCard from './TaskCard.jsx';

function App() {
  const [tasks, setTasks]=useState(["do study","go to the market"]);
  const [newTask , setNewTask]=useState("");
const date=new Date().toDateString();
const addTask=()=>{
  if(newTask.trim()=="")
    return;
  setTasks([newTask,...tasks ]);
  setNewTask("");
}
const deleteTask=(taskToDelete)=>{
  const updatedTasks=tasks.filter((tasks)=>tasks!==taskToDelete);
  setTasks (updatedTasks);
}

  return (
    <div>
      <div className='container'>
        <div className='headingCon'>
          <h1 className="TaskHeading">My Tasks</h1>
        <p>{date}</p>
        </div>
        <div className='togglerCon'>
          <Moon className='toggler' />
        </div>
      </div>
      <div className="taskCardCon">
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} deleteTask={()=>{deleteTask(task)}}/>
        ))}
      </div>
      <div className='addTaskCon'>
        <input type="text"className='task-input'placeholder='Add a Task' value={newTask} onChange={(e)=>{
            setNewTask(e.target.value);
        }} />
        <button className="add-btn" onClick={addTask} ><Plus/></button>
        </div>
    </div>
  )
}

export default App
