import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

let initState = {users: [], user: null, posts: []};
let store = createStore((state = initState, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return {...state, users: action.payload};

        case "LOAD_POSTS":
            return {...state, posts: action.payload};

        // case
        // "CHOOSE_USER":
        //     let id = action.payload;
        //     let user = state.users.find(value => value.id === id);
        //     return {...state, user: user}

        default:
            return state;
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
