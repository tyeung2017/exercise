import { combineReducers } from 'redux';

import todo from './todo';
import fetch from './fetch';

const rootReducer = combineReducers({
  todo,
  fetch,
});

export default rootReducer;
