import {fetchInfoEPending, fetchInfoESuccess, fetchInfoEError} from './infoaction.js';

 function fetchthroughid(id) {
   
    return  async dispatch => {
        
        dispatch(fetchInfoEPending());
        var arg = id;
        console.log(arg);
        await fetch('http://dummy.restapiexample.com/api/v1/employee/'+arg)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            if(res.status==="failed"){
                dispatch(fetchInfoESuccess(res.message,false))
                console.log("result in",res);
                return res.message;
            }
            dispatch(fetchInfoESuccess(res.data,true));
            console.log("result is  sucesss",res);
            return res.data;
        })
        .catch(error => {
            console.log("error is",error);
            dispatch(fetchInfoEError(error));
        })
    }
}

export default fetchthroughid;