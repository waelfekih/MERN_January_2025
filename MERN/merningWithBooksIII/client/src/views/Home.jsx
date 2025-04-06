import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    


    return (
        <div className='container'>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages Count</th>
                        <th>Available</th>
                        <th>Book Page</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((b, index) => (
                        <tr key={index}>
                            <td>{b.title}</td>
                            <td>{b.author}</td>
                            <td>{b.pages}</td>
                            <td>{b.isAvailable ? "Yes" : "No"} | 
                                <Link to={"/books/" + b._id + "/edit"}>Edit</Link>
                            </td>
                            <td>
                                <Link to={"/books/" + b._id}>
                                    <button className='btn btn-success'>Book Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;

    