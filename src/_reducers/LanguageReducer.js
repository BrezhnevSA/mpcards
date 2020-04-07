import * as types from '../_constants/ActionTypes';

const initialState = "RU"

export default function languageReducer(state = initialState, action) { 
    switch (action.type) {    

        case types.SAVE_LANGUAGE:
            return action.language;
    
        default:
            return state;
    }
}