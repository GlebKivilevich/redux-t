import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: 0,
  dislike: 0,
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    incrementLike: (state) => {state.likes = state.likes + 1},
    decrementLike: (state) => {state.dislike = state.dislike + 1}
  },
});

const {actions, reducer} = likesSlice;

export const {incrementLike, decrementLike} = actions;

export default reducer;
