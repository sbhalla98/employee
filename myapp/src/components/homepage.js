import React, { useEffect } from 'react';

import './Homepage.css';

import fetchProductsAction from '../redux/action';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';



const MyComponent = (props) => {
    const dispatch = useDispatch();
    const pending = useSelector(state=>state.employeeInfoReducer.pending);
    const style = pending ? {}:{display : 'none'};
        useEffect(() => {
        dispatch(fetchProductsAction());
        },[]);    
        
        const emplist = useSelector(state=>state.employeeInfoReducer.list,);
        return (
            <div className='lists'>
            <div style={style}>It is loading</div>
            <table id="employeedetails">
                <thead>
                <tr>
                <th>Name</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {emplist.map((user,index) =><tr key={user.id}>
              <td>  <NavLink to={"/emp/"+user.id} exact staticcontext={user.id} style={{textDecoration: 'none',color:'black'}} activeStyle={{
                textDecoration: 'none',
                color: 'black'
                }}> {user.employee_name}</NavLink></td>
                    <td><button>delete</button></td>
                </tr>
                
                )}
                </tbody>
            </table>
            </div>
        )
}
export default MyComponent;
