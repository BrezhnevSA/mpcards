import * as types from '../_constants/ActionTypes';

const initialState = { 
    cardstemplates: { 
        items: [], 
        isFetching: true 
    } 
}

 export default function cardstemplatesReducer(state = initialState, action) {

    switch (action.type) {

        case types.REQUEST_GET_CARDSTEMPLATES:
            return {
                items:      [],
                isFetching: true
            };

        case types.RECEIVE_GET_CARDSTEMPLATES_SUCCESS:
            return {
                items:      action.cardstemplates,
                isFetching: false
            };

        case types.RECEIVE_GET_CARDSTEMPLATES_ERROR:
            return {
                items:      [],
                message:    action.message,
                isFetching: false,
            };

        case types.REQUEST_ADD_CARDSTEMPLATE:
            return {   
                items:     state.items,
                isFething: true
            };
   
        case types.RECEIVE_ADD_CARDSTEMPLATE_SUCCESS:
            return {   
                items: [
                    ...state.items,
                    action.payload
                ],
                isFething: false
            };

            
        case types.RECEIVE_ADD_CARDSTEMPLATE_ERROR:
            return {   
                items:     state.items,
                isFething: false,
                message:   action.message
            };

        case types.REQUEST_UPDATE_CARDSTEMPLATE:
            return {   
                items:     state.items,
                isFething: true
            };

        case types.RECEIVE_UPDATE_CARDSTEMPLATE_SUCCESS:
            return {   
                items: [
                    ...state.items.map(el => (el.id === action.payload.id ? {
                        id:                action.payload.id,
                        addressee:         action.payload.addressee,
                        author:            action.payload.author,
                        importance:        action.payload.importance,
                        sentiment:         action.payload.sentiment,
                        date:              action.payload.date,
                        category:          action.payload.category,
                        description:       action.payload.description,
                        is_read:           action.payload.is_read,
                        is_marked:         action.payload.is_marked,
                        is_read_by_lead:   action.payload.is_read_by_lead,
                        is_marked_by_lead: action.payload.is_marked_by_lead
                    } : el))
                ],
                isFething: false
            };

        case types.RECEIVE_UPDATE_CARDSTEMPLATE_ERROR:
            return {   
                items:     state.items,
                isFething: false,
                message:   action.message
            };

        default:
            return state;
    }
    
}
