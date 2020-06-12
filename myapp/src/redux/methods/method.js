import axios from "axios";
import {fetchInfoPending, fetchInfoSuccess, fetchInfoError} from '../actions/action.js';
import {addmembersucess, addmembererror,deleteemployee} from '../actions/action.js';

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchInfoPending());
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchInfoSuccess(res.data));
            return res.data;
        })
        .catch(error => {
            dispatch(fetchInfoError(error));
        })
    }
}

export function adduser(obj) {
   
    return async dispatch => {
        axios({
            method: 'post',
            url: 'http://dummy.restapiexample.com/api/v1/create',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: obj
        })
        .then(res => {dispatch(addmembersucess(res.data))})
        .catch(err => {console.log("ERRor",err)
        dispatch(addmembererror(err))});
    }
}

export function deleteuser(arg) {
   
    return async dispatch => {
        axios({
            method: 'delete',
            url: 'http://dummy.restapiexample.com/api/v1/delete/'+arg,
            contentType: "application/json; charset=utf-8"
        })
        .then(res => {console.log(res)
        dispatch(deleteemployee(arg.toString()))})
        .catch(err => {console.log("ERRor",err)});
    }
}