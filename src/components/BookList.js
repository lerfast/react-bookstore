import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = ({ onDelete }) => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
