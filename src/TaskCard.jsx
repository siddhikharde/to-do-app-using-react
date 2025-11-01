import React from 'react'
import "./TaskCard.css"
import {Trash} from 'lucide-react'

function TaskCard({task, deleteTask}) {
  return (
   <div className='taskCard'>
              <div className='task'>{task} </div>
              <button className='delete-btn' onClick={deleteTask}><Trash /></button>
    </div>
  );
}

export default TaskCard;
