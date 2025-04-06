import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams , useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:3000/api/books/" + id)
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch((err) => {
                console.error("Error fetching book details:", err);
            });
    }, [id]);

    // Show loading message while fetching data
    if (book === null) {
        return <h2>Loading book details...</h2>;
    }

    const deleteBook = (idToDelete) => {
        axios.delete("http://localhost:3000/api/books/" + idToDelete)
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
                navigate('/'); 
            })
            .catch((err) => {
                console.log(err);
            }); }

    return (

        <div>
            <h2>{book.title}</h2>
            
                        <h5 className='mt-3'>Author</h5>
                        <p>{book.author}</p>
                   
                        <h5>Pages</h5>
                        <p>{book.pages}</p>
                    
                        <h5>Available</h5>
                        <p>{book.isAvailable ? "Yes" : "No"}</p>

                        <div className='text-center'>
                            <button className="btn1 mt-3" onClick={() => { deleteBook(book._id) }}>
                                <svg viewBox="0 0 448 512" className="svgIcon">
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                            </button>

                        </div>
                        
               
        </div>
          
    );
};

export default BookDetails;
