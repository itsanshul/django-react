import { GET_COURSES } from '../actions/types';

const initialState = {
    list: []
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_COURSES:
            return {
                ...state,
                list: action.payload
            }
            
        default:
            return state;    
    }
}