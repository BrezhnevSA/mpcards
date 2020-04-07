import * as types from '../_constants/ActionTypes';

// GET CARDSTEMPLATE
export const cardstemplatesGetRequest = () => {
    return {
        type: types.REQUEST_GET_CARDSTEMPLATES
    }
}

export const cardstemplatesGetSuccess = (cardstemplates) => {
    return {
        type:      types.RECEIVE_GET_CARDSTEMPLATES_SUCCESS,
        cardstemplates: cardstemplates
    }
}

export const cardstemplatesGetError = (message) => {
    return {
        type:    types.RECEIVE_GET_CARDSTEMPLATES_ERROR,
        message: message
    }
}

// POST CARDSTEMPLATE
export const cardstemplateAddRequest = () => {
    return { 
        type: types.REQUEST_ADD_CARDSTEMPLATE
    }
}

export const cardstemplateAddSuccess = (payload) => {
    return { 
        type: types.RECEIVE_ADD_CARDSTEMPLATE_SUCCESS, 
        payload: payload
    }
}

export const cardstemplateAddError = (message) => {
    return { 
        type: types.RECEIVE_ADD_CARDSTEMPLATE_ERROR, 
        message: message
    }
}

// PUT CARDSTEMPLATE
export const cardstemplateUpdateRequest = () => {
    return { 
        type: types.REQUEST_UPDATE_CARDSTEMPLATE
    }
}

export const cardstemplateUpdateSuccess = (payload) => {
    return { 
        type: types.RECEIVE_UPDATE_CARDSTEMPLATE_SUCCESS, 
        payload: payload
    }
}

export const cardstemplateUpdateError = (message) => {
    return { 
        type: types.RECEIVE_UPDATE_CARDSTEMPLATE_ERROR, 
        message: message
    }
}