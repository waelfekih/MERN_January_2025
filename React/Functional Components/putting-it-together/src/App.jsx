import { useState } from 'react';
import './App.css'

import PuttingItTogether from './components/PuttingItTogether'

function App() {


  return (
    <>
      <div>
        <PuttingItTogether firstName = "John" lastName="Doe" age = "22" hairColor="White" />

      </div>
      <div>
        <PuttingItTogether firstName = "Anna" lastName="Jackson" age = "40" hairColor="Brown" />
      </div>
      


    </>
  )
}

export default App
