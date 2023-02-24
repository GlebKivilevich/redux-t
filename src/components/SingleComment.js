import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment, updateComment } from './CommentsSlice';

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { body, id } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (body) {
      setCommentText(body);
    }
  }, [body]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateComment({ commentText, id }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item" key={id - 1}>
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;
