import React, { useState } from 'react'


const TodoForm = (props) => {
    const { addTask } = props
    const [task, setTask] = useState("")
    const [errortask , setErrorTask] = useState("")
    //const [finishedTask , setFinishedTask] = useState([])

    const handleTaskName = (e) => {
        setTask(e.target.value)
        if (e.target.value.length < 1) {
            setErrorTask("task is required")
        } else if (e.target.value.length < 3 ) {
            setErrorTask("Task must be at least 3 characters length")
        }else {
            setErrorTask("")
        }
    }

    //const handleFinishedTask = (e) => {
        //setFinishedTask(e.target.checked)

    //}

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask = { task }
            addTask(newTask)  
    
        setTask("")
        setFinishedTask(false)
        }

    return (
        <div className='container mt-4'>
            <h1 className='text-center fs-3'>Create A Task</h1>
            <form onSubmit={handleSubmit}>
            <div className='form-group row bg-gray align-items-center mb-4'>
                <div className="col-sm-10">
                    <input type="text" className='form-control' value={task} placeholder='What is your Task?' onChange={handleTaskName} />
                    {errortask ? <p className='text-danger text-center'>{errortask}</p> : "" }
                </div>

            </div>
            <input type="submit" value="Add Task" className='btn btn-primary mt-2 col-sm-2' />

            </form>
        </div>
        )

}
 export default TodoForm