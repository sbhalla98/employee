import {EMPLOYEE_FETCH, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_FETCH_ERROR,EMPLOYEE_INFO_FETCH,EMPLOYEE_INFO_FETCH_SUCCESS,EMPLOYEE_INFO_FETCH_ERROR, ADD_MEMBER,ADD_MEMBER_ERROR,ADD_MEMBER_SUCCESS} from './infoaction';
import { combineReducers } from 'redux'

const initialState = {
    pending: false,
    list: [],
    error: null
}
const particularempstate = {
    isloading:false,
    errori:null,
    info:{},
    success:false
}
const addmember ={
    flag:false,
    response:"",
    error:""
}
export function employeeInfoReducer(state = initialState, action) {
    switch(action.type) {
        case EMPLOYEE_FETCH: 
            return {
                ...state,
                pending: true
            }
        case EMPLOYEE_FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                list: action.list
            }
        case EMPLOYEE_FETCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export function addmemberReducer(state = addmember, action) {
    var temp = !state.flag;
    switch(action.type) {
        case ADD_MEMBER: 
            return {
                ...state,
                flag: temp
            }
        case ADD_MEMBER_SUCCESS: 
            return {
                ...state,
                response: action.data
            }
        case ADD_MEMBER_ERROR: 
            return {
                ...state,
                response: action.error
            }
        default: 
            return state;
    }
}
export function particularemployeeInfoReducer(state = particularempstate, action) {
    switch(action.type) {
        case EMPLOYEE_INFO_FETCH: 
            return {
                ...state,
                isloading: true
            }
        case EMPLOYEE_INFO_FETCH_SUCCESS:
            console.log("action",action);
            return {
                ...state,
                isloading: false,
                info: action.info,
                success:action.success
            }
        case EMPLOYEE_INFO_FETCH_ERROR:
            return {
                ...state,
                isloading: false,
                errori: action.error
            }
        default: 
            return state;
    }
}
export default combineReducers({
    employeeInfoReducer,
    particularemployeeInfoReducer,
    addmemberReducer
  })