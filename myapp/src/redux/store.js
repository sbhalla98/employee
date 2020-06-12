import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger"
const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;