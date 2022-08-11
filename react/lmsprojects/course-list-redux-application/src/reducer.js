import { GET_COURSE_LIST } from "./actions";

const initialState = {courses:[]}

function userReducer (state = initialState,action){
    switch(action.type){
        case GET_COURSE_LIST:
            return {...state,cities:action.payload}
        default:
            return state;
    }
}