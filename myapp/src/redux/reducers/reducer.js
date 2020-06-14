import {EMPLOYEE_FETCH, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_FETCH_ERROR,EMPLOYEE_INFO_FETCH_SUCCESS, ADD_MEMBER,ADD_MEMBER_ERROR,ADD_MEMBER_SUCCESS,DELETE_USER} from '../actions/action';
import { combineReducers } from 'redux'

const initialState = {
    pending: false,
    list: [],
    error: null,
    flag:false,
    response:"",
    erroradd:"",
    empInfo:[],
    loading : true
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
        case ADD_MEMBER: 
            var temp = !state.flag;
            return {
                ...state,
                flag: temp
            }
        case ADD_MEMBER_SUCCESS: 
            var emplist=state.list.concat({ id:(action.data.id).toString(),employee_name:action.data.name,employee_salary:action.data.salary,employee_age:action.data.age });
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
        case DELETE_USER:
            var result=state.list.filter(function(user,index){
                return user.id!==action.id;
            })
            return {
                ...state,
                loading : false,
                list:result
            }
        default: 
            return state;
    }
}
export default combineReducers({
    employeeInfoReducer
  })