import { configureStore } from '@reduxjs/toolkit';
import likes from '../components/likesSlice';
import comments from '../components/CommentsSlice';
import titel from '../components/titleSlice';

// function spamFilter(store) {
//   return function (next) {
//     return function (action) {
//       if (action.type === COMMENT_CREATE) {
//         const hasBadWords = badWords.some((res) => action.data.text.includes(res));
//         if (hasBadWords) {
//           return store.dispatch(errorOn('Уважайте людей!'));
//         }
//       }
//       return next(action);
//     };
//   };
// }

const store = configureStore({
  reducer: { likes, comments, titel },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: 'development',
});

export default store;
