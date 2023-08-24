import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, updateProgress } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const [localProgress, setLocalProgress] = useState(book.progress || 0);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(book.item_id));
  };

  const handleProgressUpdate = () => {
    dispatch(updateProgress({ item_id: book.item_id, progress: parseInt(localProgress, 10) }));
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>
        Progress:
        {book.progress || 0}
        %
      </p>
      <input
        type="number"
        min="0"
        max="100"
        value={localProgress}
        onChange={(e) => setLocalProgress(e.target.value)}
      />
      <button type="button" onClick={handleProgressUpdate}>Update Progress</button>
      <button type="button" onClick={handleRemove}>Remove Book</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    progress: PropTypes.number,
  }).isRequired,
};

export default Book;
