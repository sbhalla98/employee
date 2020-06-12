import React, { useEffect } from 'react';

import './Homepage.css';

import {fetchProducts} from '../../redux/methods/method';
import {deleteuser} from '../../redux/methods/method';
import {addmemberaction} from '../../redux/actions/action';

import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Form from '../form/form';
import Header from '../header/header';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const MyComponent = (props) => {
    const dispatch = useDispatch();
    const pending = useSelector(state=>state.employeeInfoReducer.pending);
    const addmember = useSelector(state=>state.employeeInfoReducer.flag);
    const classes = useStyles();
    const style = pending ? {}:{display : 'none'};
    const addmemberstyle = addmember ? {}:{display : 'none'};
        useEffect(() => {
        dispatch(fetchProducts());
        },[]);    
        
        const emplist = useSelector(state=>state.employeeInfoReducer.list);
        return (
            <div className='container'>
                <Header title="EMPLOYEE LIST"></Header>
                <div style={style}>It is loading</div>
                <table id="employeedetails" className={classes.table} aria-label="customized table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {emplist.map((user,index) =><tr key={user.id}>
                            <td> <NavLink to={"/emp/"+user.id} exact staticcontext={user.id} style={{textDecoration: 'none',color:'black'}} activeStyle={{textDecoration: 'none',color: 'black'}}> {user.employee_name}</NavLink></td>
                            <td> <Button variant="contained" size="small" onClick={()=>dispatch(deleteuser(user.id))} color="secondary">Delete</Button></td></tr>
                
                        )}
                    </tbody>
                </table>
                <div>
                <div className="btn">
                <div className={classes.root} >
                    <Button variant="contained" size="large" color="primary" onClick={()=>dispatch(addmemberaction())}>
                        Add a member
                    </Button>
                </div>
                </div>
                <div className="form" style={addmemberstyle}>
                    <Form></Form>
                </div>
                </div>
            </div>
        )
}
export default MyComponent;
