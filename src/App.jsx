import React, { useState } from 'react'
import {Moon, Trash, Plus} from 'lucide-react'
import "./App.css";
import TaskCard from './TaskCard.jsx';

function App() {
  const [tasks, setTasks]=useState(["do study","go to the market"]);
  const [newTask , setNewTask]=useState("");
const date=new Date().toDateString();
function addTask(){
  if(newTask.trim()=="")
    return;
  setTasks(...tasks, newTask);
  setNewTask("");
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
          <TaskCard task={task} key={index} />
        ))}
      </div>
     
    
    </div>
  )
}

export default App
