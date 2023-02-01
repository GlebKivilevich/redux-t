import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentsLoad } from '../redux/actions';
import SingleComment from './SingleComment';
import uniqid from 'uniqid';

function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment('');
  };

  useEffect(() => {
    dispatch(commentsLoad())
  }, [])

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" placeholder="Написать комментарий..." value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length ? (
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })
      ) : (
        <h2 style={{ justifyContent: 'center', height: '50%', display: 'flex', alignItems: 'center' }}>
          У вас нет комментариев
        </h2>
      )}
    </div>
  );
}
export default Comments;
