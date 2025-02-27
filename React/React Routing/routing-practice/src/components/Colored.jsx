import React from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Colored = () => {
    const { value , color , backgroundColor} = useParams();
    

  return (
    <div>
        <h2 className='container text-center mt-3' style={{color:color, backgroundColor:backgroundColor}}>{value}</h2>
    </div>
  )
}

export default Colored