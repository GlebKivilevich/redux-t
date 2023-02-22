import { createSlice } from '@reduxjs/toolkit';

const initialState = { text: '' };

const titleSlice = createSlice({
  name: 'titel',
  initialState,
  reducers: {
    createText: (state, action) => {
      console.log(action);
      state.text = action.payload;
    },
  },
});

const { actions, reducer } = titleSlice;

export const { createText } = actions;
export default reducer;
