import React from 'react';
import { incrementLike, decrementLike } from '../components/likesSplit';
import { useDispatch, useSelector } from 'react-redux';

function Likes(props) {
  const { likes, dislike } = useSelector((state) => state.likes);
  const dispatch = useDispatch();

  return (
    <>
      <div className="button-controls">
        <button onClick={() => dispatch(incrementLike())}>🖤 {likes}</button>
        <button onClick={() => dispatch(decrementLike())}>👎 {dislike}</button>
      </div>
      <h4>Оценили {likes + dislike} раз</h4>
    </>
  );
}

export default Likes;
