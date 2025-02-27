import React from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Word = () => {
    const {value} = useParams();

  return (
    <div className='container text-center mt-3'>
        <h2>The Word is : {value} </h2>
    </div>
  )
}

export default Word