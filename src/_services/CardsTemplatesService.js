import axios from 'axios'; 

import * as config from '../config/config';
import * as send   from '../_actions/CardsTemplatesActions';

export const getCardstemplates = () => {                                   
    return (dispatch) => {
      dispatch(send.cardstemplatesGetRequest())
      return axios.get(`${config.baseUrl}/cardstemplates`)                               
        .then(response => {
          dispatch(send.cardstemplatesGetSuccess(response.data))  
        })
        .catch(error => { 
          dispatch(send.cardstemplatesGetError(error.response.message));
          throw(error); 
        });
    };
};

export const addCardstemplate = (cardstemplate) => {                                   
    return (dispatch) => {
      dispatch(send.cardstemplateAddRequest())
      return axios.post(`${config.baseUrl}/cardstemplates`, cardstemplate)                               
        .then(response => {
          dispatch(send.cardstemplateAddSuccess(response.data))  
        })
        .catch(error => { 
          dispatch(send.cardstemplateAddError(error.response.message))
          throw(error); 
        });
    };
};

export const updateCardstemplate = (cardstemplate) => {                                   
  return (dispatch) => {
    dispatch(send.cardstemplateUpdateRequest())
    return axios.put(`${config.baseUrl}/cardstemplates/${cardstemplate.id}`, cardstemplate)                               
      .then(response => {
        dispatch(send.cardstemplateUpdateSuccess(response.data))  
      })
      .catch(error => { 
        dispatch(send.cardstemplateUpdateError(error.response.message))
        throw(error); 
      });
  };
};