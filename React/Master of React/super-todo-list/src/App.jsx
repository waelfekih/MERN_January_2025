import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, {id: Date.now() ,text: action.payload }];
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
      dispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText(""); 
    
  };

  return (
    <div className="text-center ">
      <h2>Super Todo List</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="btn btn-primary ml-3" onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button className="btn btn-danger mt-2 " onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
              ✖️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

