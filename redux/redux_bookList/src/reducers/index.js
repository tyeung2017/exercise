import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import activeBook from './reducer_active_book.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook,
});

export default rootReducer;
