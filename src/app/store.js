import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { asyncFunctionMiddleware } from './middlewares';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(asyncFunctionMiddleware))
);

export default store;
