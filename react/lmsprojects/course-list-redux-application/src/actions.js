import axios from 'axios';

export const GET_COURSE_LIST = 'GET_COURSE_LIST';
export const ADD_COURSE = 'ADD_COURSE';

const API_URL = 'http://localhost:4500/courses';

export const getCities = ()=>{
    try{
        return async dispatch =>{
            const results = await axios.get(API_URL);
            dispatch({
                type: GET_COURSE_LIST,
                payload : results.json()
            })
        } 
    }
    catch(exception)
    {
        console.log('Exception occured while getting cities');
    }
}