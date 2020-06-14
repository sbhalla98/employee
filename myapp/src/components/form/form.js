import React ,{useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green,grey } from '@material-ui/core/colors';

import {adduser} from '../../redux/methods/method'; 
import { useDispatch } from 'react-redux';

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

  async function handleSubmit(e){
    const obj ={
        name:name.current.value,
        salary:salary.current.value,
        age:age.current.value
    }
    dispatch(await adduser(JSON.stringify(obj)));
    document.getElementById("myform").reset();
    alertmessage(); 
  };

  function alertmessage(){
    alert('Member added successfullyy!!!'); 
  }
  return (
    <form className={classes.root} noValidate autoComplete="off" id="myform">
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
          <Button variant="contained" size="large" style={{ backgroundColor: green[500],color:grey[50] }} onClick={handleSubmit}>
              Submit
          </Button>
        </div>
      </div>
    </form>
  );
}