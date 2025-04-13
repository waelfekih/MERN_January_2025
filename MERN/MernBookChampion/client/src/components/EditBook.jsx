import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState(0);
  const [available, setAvailable] = useState(false);
  const [msg, setMsg] = useState('');

  const [titleError, setTitleError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/books/${id}`)
      .then(res => {
        const book = res.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPages(book.pages);
        setAvailable(book.isAvailable);
      })
      .catch(err => {
        console.error('Error fetching book:', err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || author === '' || pages < 1) {
      setMsg('❌ Please fill in all fields correctly ❌');
      return;
    }

    const updatedBook = { title, author, pages, isAvailable: available };

    axios.put(`http://localhost:3000/api/books/${id}`, updatedBook)
      .then(res => {
        console.log('✅ Book updated:', res.data);
        navigate('/');
      })
      .catch(err => {
        console.error('❌ Error updating book:', err);
        setMsg('❌ Failed to update book ❌');
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4 text-center">✏️ Edit Book</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">📖 Title</label>
            <input
              type="text"
              className={`form-control ${titleError ? 'is-invalid' : ''}`}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError(e.target.value ? '' : '❌ Title is required ❌');
              }}
            />
            {titleError && <div className="invalid-feedback">{titleError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">✍️ Author</label>
            <input
              type="text"
              className={`form-control ${authorError ? 'is-invalid' : ''}`}
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
                setAuthorError(e.target.value ? '' : '❌ Author is required ❌');
              }}
            />
            {authorError && <div className="invalid-feedback">{authorError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">📄 Pages</label>
            <input
              type="number"
              className={`form-control ${pageError ? 'is-invalid' : ''}`}
              value={pages}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setPages(value);
                setPageError(value < 1 ? '❌ Pages must be more than 0 ❌' : '');
              }}
            />
            {pageError && <div className="invalid-feedback">{pageError}</div>}
          </div>

          <div className="form-check mb-4 d-flex justify-content-center align-items-center gap-2">
            <input
              type="checkbox"
              className="form-check-input m-0"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              id="availableCheck"
            />
            <label className="form-check-label mb-0 " htmlFor="availableCheck">
              ✅ Available
            </label>
          </div>

          {msg && <div className="alert alert-info text-center">{msg}</div>}

          <div className="text-center">
            <button type='submit' className='btnupdate' disabled={title === "" || author === "" || pages < 1 || titleError || authorError || pageError ? true  : false}> Update
                <span></span>
            </button>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default EditBook;
