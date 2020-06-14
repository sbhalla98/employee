import React, { useEffect } from 'react';

import './employee.css';
import Header from '../header/header';
import Load from '../load/loading';
import { fetchInfoESuccess } from '../../redux/actions/action.js';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Employee = (props) => {
        const dispatch = useDispatch();
        const emplist = useSelector(state=>state.employeeInfoReducer.list);
        var empobj = useSelector(state=>state.employeeInfoReducer.empInfo);
        const history = useHistory();

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
        const navigatetohome=()=>{
            history.push("/");
        }
        return (
            <div>
                <Header title="EMPLOYEE INFORMATION"></Header>
                <button onClick={navigatetohome} className="historybtn">go back</button>
            { !empobj &&
                <div><Load message="Call Api"></Load></div>
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