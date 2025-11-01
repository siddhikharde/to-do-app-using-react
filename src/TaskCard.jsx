import React from 'react'
import "./TaskCard.css"
import {Trash} from 'lucide-react'
import { useState } from 'react';

function TaskCard({task, deleteTask}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
   <div className='taskCard'>
              <div className='task'>
                <input type="checkbox" className='checkbox' onChange={()=>{handleCheckboxChange();
                  localStorage.setItem('taskStatus', JSON.stringify(!isChecked));
                }} />
               <p className={isChecked ? 'completed' : ''}> {task}</p> </div>
              <button className='delete-btn' onClick={deleteTask}><Trash /></button>
    </div>
  );
}

export default TaskCard;

 
