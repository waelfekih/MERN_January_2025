import React from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Number = () => {
  const { value} = useParams();
  return(
    <div className='container text-center mt-3'>
        <h1>The number is {value}</h1>
    </div>
  )
}


export default Number