"use strict"

import {combineReducers} from 'redux';

// Import Reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// Combine Reducers
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
