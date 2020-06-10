import axios from "axios";
import {addmembersucess, addmembererror} from './infoaction.js';
export default function adduser(obj) {
   
    return  dispatch => {
        
        console.log(obj);
        axios
        .post('http://dummy.restapiexample.com/create',obj)
        .then(res => {console.log(res)
        dispatch(addmembersucess(res.data))})
        .catch(err => {console.log("ERRor",err)
        dispatch(addmembererror(err))});
    }
}