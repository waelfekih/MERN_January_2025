import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  const [tasks,setTasks] = useState([])

  const addTask = (myTask) => {
    if (!Array.isArray(myTask)) {
      myTask= [myTask]

      setTasks([...tasks, ...myTask])
      console.log("TASK" , tasks)
      
    }}

    const deleteTask = (index) => {
      setTasks((tasks) => tasks.filter((_ , i) => i !== index))
    }  

    const handleCheckBox = (index) => {
      setTasks((previousTaks) =>
        previousTaks.map((elt, i) =>
          i === index ? { ...elt, isChecked: !elt.isChecked } : elt))
    }
        
      

    
  
  return (
    <>
      <TodoForm addTask = {addTask}/>
      <TodoList tasks = {tasks} deleteTask={deleteTask} handleCheckBox={handleCheckBox} />
    </>
  )
}

export default App
