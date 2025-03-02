import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
  //const [starwars , setStarWars] = useState([]);
  const [starWarsData , setStarWarsData] = useState([]);
  const [selectedStarWarsData , setSelectedStarWarsData] = useState('')
  const [starWarsID , setStarWarsID] = useState([]);
  const [selectedStarWarsID , setSelectedStarWarsID] = useState('');
  const [data , setData] = useState(null)

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/')
      .then((response) => {
        setStarWarsData(Object.keys(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // fetch ID when starWarsData is selected

  useEffect(() => {
    if (selectedStarWarsData) {
    axios
    .get(`https://swapi.dev/api/${selectedStarWarsData}/`)
    .then((response) => {
      setStarWarsID(response.data.results.map((_, index) => index + 1));
    })
    .catch((error) => console.log(error));
      } else {
      setStarWarsID([]); 
      }
    }, [selectedStarWarsData]);

    // fetch data when clicking search

    const handleSearch =() => {
      if (!selectedStarWarsID || !selectedStarWarsID) return ; 

      axios 
      .get(`https://swapi.dev/api/${selectedStarWarsData}/${selectedStarWarsID}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error)
        setData(null)
      })

    } 
    
  return (
    <>
      <h1 className='text-center mt-4'>Luke API Walker</h1>
      <form>
        <div className='container d-flex justify-content-around align-items-center mt-5'>
          <div>
            <label className="block text-lg font-semibold mb-2">Search for :</label>
              <select className="w-full p-2 border rounded-lg" 
              onChange = {(e) => setSelectedStarWarsData(e.target.value)} value={selectedStarWarsData} >
                <option disabled>Select One</option>
                {starWarsData.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}

              </select>

          </div>
          
          <div>
            <label className="block text-lg font-semibold mb-2">ID :</label>
              <select className="w-full p-2 border rounded-lg"
                onChange={(e) => setSelectedStarWarsID(e.target.value)} value={selectedStarWarsID} disabled={!selectedStarWarsData}>
                <option disabled>Select an ID</option>
                {starWarsID.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                  
                ))} 
              </select>
          </div>
          <button type="button" className='btn btn-primary' onClick={handleSearch}>Search</button>
        </div>
        
      </form>
      

      {data && (
        <div className="mt-4 p-4 border rounded-lg bg-light">
          <h3>Results:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;



