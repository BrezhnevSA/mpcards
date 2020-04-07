import * as types from '../_constants/ActionTypes';

export const saveFiles = (files) => {
    return {
        type:  types.SAVE_FILES,
        files: files
    };
};