import '../../test';
import Header from './header';
import { shallow, render, mount, configure } from 'enzyme'
import checkprops from 'check-prop-types';
import React from 'react';
import {testStore} from '../utils/utils';

const setUp = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<Header store={store} />)
    return wrapper;
}
describe('headerTest',()=>{
    const initialState = {

    }
    const expectedprop = {
        title:"abc"
    }
    const comp = setUp(initialState);
    const propError = checkprops(comp.propTypes,expectedprop,'prop',comp.title);
    test('checkprops',()=>{
        expect(propError).toBeUndefined();
    })

    test('findcomp',()=>{
        const wrapper = comp.find('#header');
        expect(wrapper.length).toBe(1);
    })
});