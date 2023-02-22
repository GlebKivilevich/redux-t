import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  statusComm: '',
};

export const fetchComment = createAsyncThunk('comments/fetchComment', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=7');
  const json = await res.json();
  return json;
});

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    deleteComment: (state, action) => {
      state.comments = state.comments.filter((item) => item.id !== action.payload);
    },
    createComment: (state, action) => {
        console.log(action)
      state.comments = [...state.comments, action.payload];
    },
  },
  extraReducers: (buider) => {
    buider.addCase(fetchComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

const { actions, reducer } = commentSlice;
export const { deleteComment, createComment } = actions;
export default reducer;
