import React ,{useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Addmember from '../redux/actionthree'; 
import { useDispatch } from 'react-redux'

import './form.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ColorTextFields() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const name = useRef();
  const salary = useRef();
  const age = useRef();
  const handleSubmit = e => {
    const obj ={
        name:name.current.value,
        salary:salary.current.value,
        age:age.current.value
    }
    
    dispatch(Addmember(JSON.stringify(obj)));
    console.log(name.current.value,salary.current.value,age.current.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
       <TextField
        name="name"
        type="text"
        className="outlined-secondary"
        label="Enter Employee name"
        variant="outlined"
        color="secondary"
        inputRef={name}
      /><br/>
      <TextField
        name="salary"
        type="text"
        className="outlined-secondary"
        label="Enter Employee salary"
        variant="outlined"
        color="secondary"
        inputRef={salary}
      /><br/>
      <TextField
        name="age"
        type="text"
        className="outlined-secondary"
        label="Enter Employee age"
        variant="outlined"
        color="secondary"
        inputRef={age}
      /><br/>
         <div className="btn">
            <div className={classes.root} >
      
                <Button variant="contained" size="large" color="secondary" onClick={handleSubmit}>
                    Add a Member
                </Button>
            </div>
            </div>
    </form>
  );
}