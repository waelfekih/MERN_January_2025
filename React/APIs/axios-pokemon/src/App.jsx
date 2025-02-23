import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151') 
      .then((response) => {
        setPokemon(response.data.results); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <div className="container text-center">
      <h1>
        Pokemon <span className="text-danger">API</span>
      </h1>
      <ol className='list-group-numbered'>
        {pokemon.map((p, index) => (
          <li key={index} className="list-group-item">
            {p.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;