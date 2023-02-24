import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  statusComm: '',
  textComm: null,
};

export const fetchComment = createAsyncThunk('comments/fetchComment', async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=7');
    const json = await res.json();
    return json;
  } catch (err) {
    const error = 'Ошибка API';
    throw error;
  }
});

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    deleteComment: (state, action) => {
      state.comments = state.comments.filter((item) => item.id !== action.payload);
    },
    createComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    updateComment: (state, action) => {
      state.comments = [
        ...state.comments.slice(0, action.payload.id - 1),
        action.payload,
        ...state.comments.slice(action.payload.id),
      ];
    },
  },
  extraReducers: (buider) => {
    buider.addCase(fetchComment.pending, (state) => {
      state.statusComm = 'loading';
    });
    buider.addCase(fetchComment.fulfilled, (state, action) => {
      state.statusComm = 'idle';
      state.comments = action.payload;
    });
    buider.addCase(fetchComment.rejected, (state, action) => {
      state.statusComm = 'error';
      state.textComm = action.error.message;
    });
    buider.addDefaultCase(() => {});
  },
});

const { actions, reducer } = commentSlice;
export const { deleteComment, createComment, updateComment, errorFetch } = actions;
export default reducer;
