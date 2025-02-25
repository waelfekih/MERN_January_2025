import React from 'react'
import { useState } from 'react';

const TodoList = (props) => {
    const {tasks , deleteTask} = props ;
    const [finishedTask , setFinishedTask] = useState(false)

    const handleFinishedTask = (e) => {
        setFinishedTask(e.target.checked)

    }
    


    return (
        <div className='container mt-4'>
            <div>
                {
                    tasks.map((oneTask , index) => {
                        return (
                            <div key={index} className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-2'>
                                    <p>{oneTask.task} </p>
                                </div>
                                <button className='btn btn-danger' onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        )

                    })
                }
            </div>
        </div>
            
    )
}

export default TodoList