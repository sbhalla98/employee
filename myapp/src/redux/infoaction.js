export const EMPLOYEE_FETCH = 'EMPLOYEE_FETCH_PENDING';
export const EMPLOYEE_FETCH_SUCCESS = 'EMPLOYEE_FETCH_SUCCESS';
export const EMPLOYEE_FETCH_ERROR = 'EMPLOYEE_FETCH_ERROR';

export const EMPLOYEE_INFO_FETCH = 'EMPLOYEE_INFO_FETCH_PENDING';
export const EMPLOYEE_INFO_FETCH_SUCCESS = 'EMPLOYEE_INFO_FETCH_SUCCESS';
export const EMPLOYEE_INFO_FETCH_ERROR = 'EMPLOYEE_INFO_FETCH_ERROR';

export const ADD_MEMBER = 'ADD_MEMBER';

export function fetchInfoPending() {
    return {
        type: EMPLOYEE_FETCH
    }
}

export function fetchInfoSuccess(list) {
    return {
        type: EMPLOYEE_FETCH_SUCCESS,
        list: list
    }
}

export function fetchInfoError(error) {
    return {
        type: EMPLOYEE_FETCH_ERROR,
        error: error
    }
}
export function fetchInfoEPending() {
    return {
        type: EMPLOYEE_INFO_FETCH
    }
}

export function fetchInfoESuccess(list,status) {
    console.log("in action list is ",list);
    return {
        type: EMPLOYEE_INFO_FETCH_SUCCESS,
        info: list,
        success:status
    }
}

export function fetchInfoEError(error) {
    return {
        type: EMPLOYEE_INFO_FETCH_ERROR,
        errori: error
    }
}

export function addmemberaction() {
    return {
        type: ADD_MEMBER
    }
}