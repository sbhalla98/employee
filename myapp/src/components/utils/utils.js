import { createStore, applyMiddleware } from 'redux';
import reducer from '../../redux/reducers/reducer';
import thunk from 'redux-thunk';

export const testStore=(initialState)=>{const createstorewithmiddleware = applyMiddleware(thunk)(createStore);
return createstorewithmiddleware(reducer,initialState)};




export const findByAttr = (comp,attr)=>{
    console.log(attr);
    const wrapper = comp.find(`[data-test]='${attr}'`)
    return wrapper;
};