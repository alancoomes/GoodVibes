import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import songReducer from './reducers/songReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    songs: songReducer,
});

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
