import { configureStore } from '@reduxjs/toolkit';
import likes from '../components/likesSlice';
import comments from '../components/CommentsSlice';
import titel from '../components/titleSlice';

const store = configureStore({
  reducer: { likes, comments, titel },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
