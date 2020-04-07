import { combineReducers }   from 'redux';
import cardstemplatesReducer from './CardsTemplatesReducer';
import usersReducer          from './UsersReducer'; 
import filesReducer          from './FilesReducer';
import languageReducer       from './LanguageReducer';

export const rootReducer = combineReducers({
  cardstemplates: cardstemplatesReducer,
  users:          usersReducer,
  files:          filesReducer,
  language:       languageReducer
});