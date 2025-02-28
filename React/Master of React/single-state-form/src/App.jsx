import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';


function App() {

  const [users , setUsers] = useState([]);

  const addUser = (myUser) => {

    setUsers([...users , myUser])
  }

  return (
    <>
      <Form users={users} addUser={addUser} />
    </>
  )
}

export default App
