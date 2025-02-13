import { useState } from 'react'

import './App.css'

function App() {

  const msg1 = "Hello Dojo!"
  const msg2 = "things I need to do : "
  const msg3 = ["Learn React" , "Climb Mt Everest" , "Run a Marathon" , "Feed the Dogs"];

  return (
    <>
      <h1>{msg1}</h1>
      <h3>{msg2}</h3>

      <ul>
        {msg3.map((msg) => (
          <li>{msg}</li>
        
      ))}
          
          
      </ul>
      
      
      
    </>
  )
}

export default App
