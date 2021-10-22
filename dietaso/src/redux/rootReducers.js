import { combineReducers } from 'redux';

import authorizationReducer from './reducers/authorizationReducer';
import counter from './reducers/counter';

const rootReducer = combineReducers({
    authorizationStore: authorizationReducer,
    counter: counter,
    
});

export default rootReducer;
