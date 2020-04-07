import * as types from '../_constants/ActionTypes';

// GET USERS
export const usersGetRequest = () => {
    return {
        type: types.REQUEST_GET_USERS
    }
}

export const usersGetSuccess = (users) => {
    return {
        type:  types.RECEIVE_GET_USERS_SUCCESS,
        users: users
    }
}

export const usersGetError = (message) => {
    return {
        type:    types.RECEIVE_GET_USERS_ERROR,
        message: message
    }
}