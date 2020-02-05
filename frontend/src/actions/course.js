import axios from 'axios';
import { GET_COURSES } from './types';

export const getCourseList = () => dispatch =>{
    axios
        .get('api/course/')
        .then(res => {
            dispatch({
            type: GET_COURSES,
            payload: res.data
            });
        })
        .catch(err => console.log(err));
}