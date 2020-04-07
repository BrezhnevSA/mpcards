import * as types from '../_constants/ActionTypes';

export const saveLanguage = (language) => {
    return {
        type:  types.SAVE_LANGUAGE,
        language: language
    };
};