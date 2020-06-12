export const EMPLOYEE_FETCH = 'EMPLOYEE_FETCH_PENDING';
export const EMPLOYEE_FETCH_SUCCESS = 'EMPLOYEE_FETCH_SUCCESS';
export const EMPLOYEE_FETCH_ERROR = 'EMPLOYEE_FETCH_ERROR';

export const EMPLOYEE_INFO_FETCH_SUCCESS = 'EMPLOYEE_INFO_FETCH_SUCCESS';

export const ADD_MEMBER = 'ADD_MEMBER';
export const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
export const ADD_MEMBER_ERROR = 'ADD_MEMBER_ERROR';

export const DELETE_USER = 'DELETE_USER';

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

export function fetchInfoESuccess(response) {
    return {
        type: EMPLOYEE_INFO_FETCH_SUCCESS,
        response:response
    }
}

export function addmemberaction() {
    return {
        type: ADD_MEMBER
    }
}

export function addmembersucess(data) {
    return {
        type: ADD_MEMBER_SUCCESS,
        response:data.status,
        data:data.data
    }
}

export function addmembererror(error) {
    return {
        type: ADD_MEMBER_ERROR,
        error:error
    }
}

export function deleteemployee(id) {
    return {
        type: DELETE_USER,
        id:id
    }
}