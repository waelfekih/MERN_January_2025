import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Box from './components/Box';

function App() {
 
  const [color, setColor] = useState("");
  const [boxes , setBoxes] = useState([]) ;
  const [size , setSize] = useState("");

  const addBox = (e) => {
    e.preventDefault();

    const newBox = {
      id: Date.now(), 
      color: color,
      size: parseInt(size , 10)
    };

    

    setBoxes([...boxes, newBox]);

    setColor("");
    setSize("");

    

  };

  return (
    <>
    <h1 className="text-center mt-3 ">Box Generator</h1>

    <form className="w-25 mx-auto text-center" onSubmit={addBox}>
      <div className="mb-3 mt-5 form-group">
        <label >Color:</label>
        <input type="text" className="form-control mt-1" value={color} onChange={(e) => setColor(e.target.value)}/>

        <label>Size :</label>
        <input type="number" className="form-control mt-1" value={size} min="0" onChange={(e) => setSize(e.target.value)} />

        <input type="submit" value="Add Box" className='btn btn-primary mt-4'/>
      </div>
    </form>

    <Box boxes={boxes} />
    </>
  
  );
}
export default App;

