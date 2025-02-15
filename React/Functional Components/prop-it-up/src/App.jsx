import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  
  return (
    <>
      <div className='card'>
        <div>
          <PersonCard  firstName="John" lastName="Doe" age="30" hairColor="Black" />
        </div>

        <div>
          <PersonCard firstName="Michael" lastName="Webb" age="47" hairColor="Brown" />
        </div>

        <div>
          <PersonCard firstName="Sarah" lastName="McKnee" age="24" hairColor="Yellow" />
        </div>

        <div>
          <PersonCard firstName="Victoria" lastName="Petterson" age="33" hairColor="Red" />
        </div>
        
      </div>
      

       
        
    </>
  ) 
}

export default App


