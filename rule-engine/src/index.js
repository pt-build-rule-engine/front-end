import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer as loginReducer } from './Reducers/Login';
import { reducer as signupReducer } from './Reducers/SignUp';
import { reducer as addReducer } from './Reducers/addContact';
import { reducer as deleteReducer } from './Reducers/deleteItems';
import { reducer as getReducer } from './Reducers/getContacts';
import { reducer as editReducer } from './Reducers/editContact';
import { reducer as getIndReducer } from './Reducers/getIndContact';



const rootReducer = combineReducers({
    user: loginReducer,
    newUser: signupReducer,
    deletedItem: deleteReducer,
    addedItem: addReducer,
    contacts: getReducer,
    editedItem: editReducer,
    indContact: getIndReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
