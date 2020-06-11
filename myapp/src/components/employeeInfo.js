import React, { useEffect } from 'react';

import './employeeInfo.css';
import Header from './header';
import { fetchInfoESuccess } from '../redux/infoaction.js';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

const Employee = (props) => {
        const dispatch = useDispatch();
        const emplist = useSelector(state=>state.employeeInfoReducer.list);
        useEffect(() => {
            var empobj;
            var id=props.match.params.id;
            emplist.map(function(user,index){
                if(user.id===id.toString()){
                    empobj=user;
                }
            })
            dispatch(fetchInfoESuccess(empobj));

        },[]);
        var empobj = useSelector(state=>state.employeeInfoReducer.empInfo);
        console.log(empobj);
        return (
            <div>
                <Header title="EMPLOYEE INFORMATION"></Header>
            { !empobj &&
                <div>Api doesnot call</div>
            }
            { empobj &&
            <div className="empInfo">
            <div>
            <div>Employee Name:<span>{empobj.employee_name}</span></div>
            <div>Employee Salary:<span>{empobj.employee_salary}</span></div>
            <div>Employee Age:<span>{empobj.employee_age}</span></div>
            </div>
            </div>
            }
            </div>
        )
}
export default Employee;