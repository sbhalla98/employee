import {EMPLOYEE_FETCH, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_FETCH_ERROR,EMPLOYEE_INFO_FETCH_SUCCESS, ADD_MEMBER,ADD_MEMBER_ERROR,ADD_MEMBER_SUCCESS} from './infoaction';
import { combineReducers } from 'redux'

const initialState = {
    pending: false,
    list: [],
    error: null,
    flag:false,
    response:"",
    erroradd:"",
    empInfo:[]
}
export function employeeInfoReducer(state = initialState, action) {
    var temp = !state.flag;
    if(action.data){
        var emplist=state.list.concat({ id:(action.data.id).toString(),employee_name:action.data.name,employee_salary:action.data.salary,employee_age:action.data.age });
    }
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
        case ADD_MEMBER: 
            return {
                ...state,
                flag: temp
            }
        case ADD_MEMBER_SUCCESS: 
            return {
                ...state,
                response: action.response,
                list:emplist
            }
        case ADD_MEMBER_ERROR: 
            return {
                ...state,
                response: action.error
            }
        case EMPLOYEE_INFO_FETCH_SUCCESS:
            return {
                    ...state,
                    empInfo:action.response
            }
        default: 
            return state;
    }
}
export default combineReducers({
    employeeInfoReducer
  })