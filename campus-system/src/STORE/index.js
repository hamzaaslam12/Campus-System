import {createStore, applyMiddleware} from 'redux';
import  thunk from "redux-thunk";
import rootReducer from './REDUCERS/combineReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
