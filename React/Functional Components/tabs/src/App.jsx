import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2' ;
import Tab3 from './components/Tab3';

function App() {

  const [showTab , setShowTab] = useState(null)
    
  

  return (
    <>
      <div className='"btn-group" role="group" aria-label="Basic outlined example" text-center mt-3 '>
        <button type="button" className="btn btn-outline-primary" onClick ={() => setShowTab('Tab1') }>Tab 1</button>
        <button type="button" className="btn btn-outline-primary" onClick ={() => setShowTab('Tab2') } >Tab 2</button>
        <button type="button" className="btn btn-outline-primary" onClick ={() => setShowTab('Tab3')} >Tab 3</button>
      </div>
    
    {showTab === 'Tab1' && <Tab1/>}
    {showTab === 'Tab2' && <Tab2/>}
    {showTab === 'Tab3' && <Tab3/>}
    </>
  )
}

export default App;
