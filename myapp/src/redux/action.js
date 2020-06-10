import {fetchInfoPending, fetchInfoSuccess, fetchInfoError} from './infoaction.js';

function fetchProducts() {
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

export default fetchProducts;