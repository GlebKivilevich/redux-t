import { combineReducers } from 'redux';
import { likesReducer, dislikeReducer } from './likesReducer';
import { inputReducer } from './inputReducer';
import { commentsReducer } from './commentsReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  // likesReducer,
  // dislikeReducer,
  inputReducer,
  commentsReducer,
  appReducer,
});
