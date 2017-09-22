"use strict"
// React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT ROUTER
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// Import Combined Reducers
import reducers from './reducers/index'
// Import actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// STEP 1 create the Store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';


const Routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList}/>
        <Route path="/admin" component={BooksForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>
    </Router>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);



//STEP 2 create and dispatch actions
// Post Books
// store.dispatch(postBooks(
//
// ))
