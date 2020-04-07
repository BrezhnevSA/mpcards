import React, { Component } from 'react';
import { 
    applyMiddleware, 
    createStore 
}                           from 'redux';
import { Provider }         from 'react-redux';
import thunk                from 'redux-thunk';
import logger               from 'redux-logger';
import { ToastContainer }   from 'react-toastify'; // notification's box

import { rootReducer }       from './_reducers/index';
import Main                  from './components/MainComponent';
import initialState          from './_constants/initialState';
import { getCardstemplates } from './_services/CardsTemplatesService';
import { getUsers } from './_services/UsersService';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

store.dispatch(getCardstemplates());
store.dispatch(getUsers());

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
                <ToastContainer />
            </Provider>
        );
    }
}