import axios from "axios";
import {addmembersucess, addmembererror} from './infoaction.js';
export default function adduser(obj) {
   
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