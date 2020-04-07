import * as types from '../_constants/ActionTypes';

const initialState = { 
    files: []
}

export default function languageReducer(state = initialState, action) { 
    switch (action.type) {    

        case types.SAVE_FILES:
            return { files: action.files };
    
        default:
            return state;
    }
}