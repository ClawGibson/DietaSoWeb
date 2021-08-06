import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authorizationReducer from './reducers/authorizationReducer.js';

const reducers = combineReducers({
  authorizationStore: authorizationReducer,
});

const Store = createStore(reducers, composeWithDevTools());

export default Store;