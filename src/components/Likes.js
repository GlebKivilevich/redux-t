import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../redux/actions';

function Likes(props) {
  return (
    <>
      <div className="button-controls">
        <button onClick={props.onIncrementLikes}>🖤 {props.likes}</button>
        <button onClick={props.onDecrementLikes}>👎 {props.dislike}</button>
      </div>
      <h4>Оценили {props.likes + props.dislike} раз</h4>
    </>
  );
}

function mapStateToProps(state) {
  const { likesReducer, dislikeReducer } = state;
  return {
    likes: likesReducer.likes,
    dislike: dislikeReducer.dislike,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
