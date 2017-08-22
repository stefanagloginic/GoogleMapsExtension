/* Import dependencies */

//--------------- react modules---------------
import React from 'react';
import ReactDOM from "react-dom";
import 'babel-polyfill';
//---------------redux modules and reducers-------
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import allReducers from './redux/reducers';

/* ---------------Import Components----------- */
import App from './components/App';

/*---------------import style sheet------------ */
import './index.css';

//------------------------------------------------

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
