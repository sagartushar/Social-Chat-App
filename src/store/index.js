import reducer from '../reducers/index'
import thunk from 'redux-thunk';
import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger'
let store;

export function configureStore(){
    store  = createStore( reducer,applyMiddleware(thunk,logger))
    return store;
}