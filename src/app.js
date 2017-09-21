"use strict"

import {createStore} from 'redux';
// Import Combined Reducers
import reducers from './reducers/index'
// Import actions
import {addToCart} from './actions/cartActions';


// STEP 1 create the Store
const store = createStore(reducers);

store.subscribe(function(){
  console.log('current state is: ', store.getState());
  //console.log('current price is: ', store.getState()[1].price);
})

//STEP 2 create and dispatch actions
store.dispatch({type:"POST_BOOK",
  payload:[{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is the second book title',
    description: 'this is the second book description',
    price: 47.33
  }
]
})

// Delete a book
store.dispatch({
  type: "DELETE_BOOK",
  payload:{id: 1}
})


// Update a book
store.dispatch({
  type: "UPDATE_BOOK",
  payload: {
    id: 2,
    title: 'Learn React in 24h'
  }
})


// -->> Cart Actions <<--
// Add to Cart
store.dispatch(addToCart([{id: 1}]))
