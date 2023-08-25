import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        item_id: Date.now().toString(),
        title,
        author,
        category: 'Default',
        progress: 0, // Progress inicial
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <section className="addBookForm">
      <div className="horizontal-divider" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="bookTitle">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="bookAuthor">
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <button className="primary-button-big" type="submit">Add Book</button>
      </form>
    </section>

  );
};

export default BookForm;
