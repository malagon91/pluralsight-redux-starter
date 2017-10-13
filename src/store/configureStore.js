import  {createStore, applyMiddleware} from 'redux';
import  rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


export default  function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
    applyMiddleware(thunk,reduxImmutableStateInvariant()))
  );
  //I've add the thirt paramater that is optional. I think is to ajax calls  applyMiddleware(reduxImmutableStateInvariant())
}
/*
* Why?

Because you're not allowed to mutate your state in your reducers! And by extension, you shouldn't mutate them either outside.
n order to change state in your app, you should always return a new instance of your state with the changes.

If you're using a library such as Immutable.js, this is automatically done for you since the structures provided by that library don't allow you to mutate them
(as long as you don't have mutable stuff as values in those collections). However, if you're using regular objects and arrays, you should be careful to avoid mutations.
* */
