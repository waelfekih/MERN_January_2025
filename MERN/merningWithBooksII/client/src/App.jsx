import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className='container mt-3 text-center'>
      <div className='d-flex justify-content-between border-bottom border-3 border-dark pb-2'>
        <div className='d-flex flex-column'>
          <Link to={"/"}>
            <button className='btn btn-primary mb-2'>Catalog</button> 
          </Link>
          <Link to={"/books/create"}>
            <button className='btn btn-primary'>Add Book</button> 
          </Link>
        </div>
        <div>
          <h2>Book Catalog</h2>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/create" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
