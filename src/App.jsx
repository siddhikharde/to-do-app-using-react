import React, { use, useEffect, useState } from 'react'
import {Moon, Trash, Plus} from 'lucide-react'
import "./App.css";
import TaskCard from './TaskCard.jsx';
import { toast } from 'react-hot-toast';

function App() {
  const [tasks, setTasks]=useState([]);
  const [newTask , setNewTask]=useState("");
const date=new Date().toDateString();
const [isDarkMode, setIsDarkMode] = useState(false);

const isDarkModeStyle = {
  backgroundColor: isDarkMode ? '#121212' : '#ffffff',
  
};


useEffect(() => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(tasks);
  setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')) || false);
}, []);

useEffect(() => {
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
}, [isDarkMode]);

const addTask=()=>{
  if(newTask.trim()==""){
    toast.error('Enter a valid task!');
    return;
  } 
  else{
 setTasks([newTask,...tasks ]);
  localStorage.setItem('tasks',JSON.stringify([newTask,...tasks ]));
  setNewTask("");
   toast.success('Task added successfully!');
  
    }
}
const deleteTask=(taskToDelete)=>{
  const updatedTasks=tasks.filter((tasks)=>tasks!==taskToDelete);
  setTasks (updatedTasks);
  toast.success('Task deleted successfully!');
  localStorage.setItem('tasks',JSON.stringify(updatedTasks));
}


  return (
    <div style={isDarkModeStyle} className="App">
      <div className='container' >
        <div className='headingCon'>
          <h1 className="TaskHeading">My Tasks</h1>
        <p>{date}</p>
        
        </div>
        <div className='togglerCon'>
          <Moon className={isDarkMode ? 'dark' : 'toggle'} onClick={() => setIsDarkMode(!isDarkMode)} />
        </div>
      </div>
      <div className='heading-disc'>The way to get started is to quit talking and begin doing."</div>

      <div className='addTaskCon'>
        <input type="text"className='task-input'placeholder='Add a Task' value={newTask} onChange={(e)=>{
            setNewTask(e.target.value);
        }} />
        <button className="add-btn" onClick={addTask} ><Plus/></button>
        </div>

      <div className="taskCardCon">
        {tasks.map((task, index) => {
          return <TaskCard task={task} key={index} deleteTask={()=>{deleteTask(task)}} className={isDarkMode ? 'dark' : 'light'}/>
        })}
      </div>
      
    </div>
  )
}

export default App
