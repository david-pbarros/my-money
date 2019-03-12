import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise'
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import Reducers from './main/reducers';
import App from './main/app';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
    <Provider store={applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools)}>
        <App/>
    </Provider>
, document.getElementById('app'));