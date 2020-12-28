import { combineReducers } from 'redux';
import routeReducer from './routeReducer.js';
import cityReducer from './cityReducer.js';
import transportReducer from './transportReducer.js';

const rootReducer = combineReducers({
    routeReducer,
    cityReducer,
    transportReducer,
});

export default rootReducer;
