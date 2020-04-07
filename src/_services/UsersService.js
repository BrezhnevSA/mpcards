import axios from 'axios'; 

import * as config from '../config/config';
import * as send   from '../_actions/UsersActions';

export const getUsers = () => {                                   
    return (dispatch) => {
        dispatch(send.usersGetRequest())
        return axios.get(`${config.baseUrl}/users`)                               
            .then(response => {
                dispatch(send.usersGetSuccess(response.data))  
            })
            .catch(error => { 
                dispatch(send.usersGetError(error.response ? error.response.message : error.message));
                throw(error); 
            });
    };
};