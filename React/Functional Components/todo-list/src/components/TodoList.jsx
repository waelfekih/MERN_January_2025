import React from 'react'
import { useState } from 'react';

const TodoList = (props) => {
    const {tasks , deleteTask , handleCheckBox} = props ;
    const [finishedTask , setFinishedTasks] = useState(false)

    
    


    return (
        <div className="card-body">
        {tasks.map((oneTask, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-3"
          >
            <p
              style={{
                margin: "0 10px",
                textDecoration: oneTask.isChecked ? "line-through" : "none",
              }}
            >
              {oneTask.task}
            </p>

            <input
              type="checkbox"
              checked={oneTask.isChecked}
              onChange={(e) => handleCheckBox(index)}
            />
            <button
              className="btn btn-danger"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
        </div>
    )
}
                            
export default TodoList