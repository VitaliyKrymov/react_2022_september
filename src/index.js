import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

const userReducer = (state={users: [], user: null},action)=>{
    console.log(state, action);
    switch (action.type) {
        case "LOAD_USERS":
            return {
                ...state, users: action.payload
            }
        case "CHOOSE_USER":
            let id = action.payload;
            let user = state.users.find(value => value.id = id)
            return {...state, user:user}
        default:
            return state;
    }
};
let reducer=combineReducers({userReducer:userReducer});
let store=createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
