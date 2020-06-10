import React, { useEffect } from 'react';

import './employeeInfo.css';

import getAction from '../redux/actiontwo.js';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

const Employee = (props) => {
        const dispatch = useDispatch();
        const pending = useSelector(state=>state.particularemployeeInfoReducer.success);
        useEffect(() => {
            dispatch(getAction(props.match.params.id));
        },[]);

        const style = pending ? {}:{display : 'none'};
        const styleone = pending ? {display : 'none'}:{};
        return (
            <div>
            <div style={styleone} className="emp" >Something went wrong....</div>
            <div className="emp" style={style}>
            <div>Employee Name:</div>
            <div>Employee Salary:</div>
            <div>Employee Age:</div>
            </div>
            </div>
        )
}
export default Employee;