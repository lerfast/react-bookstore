import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import AddBookButton from './AddBookButton';
import RemoveBookButton from './RemoveBookButton';

const Book = ({ book }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.id));
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <p>
        Gender:
        {book.gender}
      </p>
      <p>
        Current Chapter:
        {book.currentChapter}
      </p>
      <button type="button" onClick={handleDelete}>Delete</button>
      <AddBookButton title={book.title} author={book.author} />
      <RemoveBookButton bookId={book.id} />
      <div>
        <h4>Comments</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li> // eslint-disable-line react/no-array-index-key
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="button" onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
