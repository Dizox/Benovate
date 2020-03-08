import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};

function reducer(state, action) {
  return true;
}

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);