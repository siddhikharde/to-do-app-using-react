import React from 'react'
import "./TaskCard.css"
import {Trash} from 'lucide-react'
function TaskCard({task}) {
  return (
   <div className='taskCard'>
              <p className='task'>{task} </p>
              <span className='deleteIcon'><Trash /></span>
    </div>
  );
}

export default TaskCard;
