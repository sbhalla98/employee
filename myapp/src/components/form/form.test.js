import '../../test';
import Form from './form';
import { Provider } from 'react-redux';
import { shallow,mount } from 'enzyme'
import React from 'react';
import {testStore} from '../utils/utils';

const setUp = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper =  mount(<Provider store={store}><Form/></Provider>);
    return wrapper;
}
describe('findcompinform',()=>{
    
    test('findcomp',()=>{
        const initialState = {

        }
        var comp = setUp(initialState);
        const wrapper = comp.find('#myform');
        expect(wrapper.length).toBe(1);
    })
});