import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [author, setAuthor] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [pages, setPages] = useState(0);
  const [pageError, setPageError] = useState("");
  const [available, setAvailable] = useState(false);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setTitleError(e.target.value.length < 1 ? "❌ Title is required ❌" : "");
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
    setAuthorError(e.target.value.length < 1 ? "❌ Author is required ❌" : "");
  };

  const handlePage = (e) => {
    const pageValue = parseInt(e.target.value);
    if (isNaN(pageValue)) {
      setPageError("❌ Pages must be a number ❌");
      setPages(0);
    } else {
      setPages(pageValue);
      setPageError(pageValue < 1 ? "❌ Pages must be more than 0 ❌" : "");
    }
  };

  const handleAvailable = (e) => {
    setAvailable(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    if (titleError || pageError || authorError || title === "" || author === "" || pages < 1) {
      setMsg("❌ Please fill the form correctly ❌");
    } else {
      // Create new book object
      const newBook = { title, author, pages, available };
      console.log("✅ Book to submit:", newBook);

      // Send the request to the backend
      axios.post("http://localhost:3000/api/books", newBook)
        .then((res) => {
          console.log("Book added:", res.data);
          setMsg("✅ Book added successfully!");

          // Redirect to the homepage after successful submission
          navigate("/");

          // Clear form fields
          setTitle("");
          setAuthor("");
          setPages(0);
          setAvailable(false);
        })
        .catch((err) => {
          console.error("Error adding book:", err);
          setMsg("❌ Failed to add book");
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4 text-center">📚 Add a New Book</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">📖 Title</label>
            <input
              type="text"
              className={`form-control ${titleError ? 'is-invalid' : ''}`}
              value={title}
              onChange={handleTitle}
              placeholder="Enter book title"
            />
            {titleError && <div className="invalid-feedback">{titleError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">✍️ Author</label>
            <input
              type="text"
              className={`form-control ${authorError ? 'is-invalid' : ''}`}
              value={author}
              onChange={handleAuthor}
              placeholder="Enter author's name"
            />
            {authorError && <div className="invalid-feedback">{authorError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">📄 Pages</label>
            <input
              type="number"
              className={`form-control ${pageError ? 'is-invalid' : ''}`}
              value={pages}
              onChange={handlePage}
              placeholder="Enter number of pages"
            />
            {pageError && <div className="invalid-feedback">{pageError}</div>}
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              checked={available}
              onChange={handleAvailable}
              id="availableCheck"
            />
            <label className="form-check-label" htmlFor="availableCheck">
              ✅ Available
            </label>
          </div>

          {msg && <div className="alert alert-info text-center">{msg}</div>}

          <div className="text-center">
          <button className="addbtn">
            <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
            </svg>
            <span>Add</span>
         </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
