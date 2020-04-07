import * as types from '../_constants/ActionTypes';

const initialState = { 
    users: { 
        items: [], 
        isFetching: true 
    } 
}

export default function usersReducer(state = initialState, action) { 
    switch (action.type) {    

        case types.REQUEST_GET_USERS:
            return {
                items:      [],
                isFetching: true
            };
    
        case types.RECEIVE_GET_USERS_SUCCESS:
            return {
                items:      action.users,
                isFetching: false
            };
    
        case types.RECEIVE_GET_USERS_ERROR:
            return {
                items:      [],
                message:    action.message,
                isFetching: false,
            };
    
        default:
            return state;
    }
}