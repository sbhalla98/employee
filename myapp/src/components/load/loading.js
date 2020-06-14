import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loading.css'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
}));

export default function ColorTextFields(props) {
    const classes = useStyles();
  return (
    <div className="load">
        <div className={classes.root}>
            <CircularProgress/>
            <div>{props.message}</div>
        </div>
    </div>
  );
}