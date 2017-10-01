import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import {userLoggedIn} from "./actions/auth";
import {initialize, addTranslation} from "react-localize-redux";
import json from './global.locale.json';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(addTranslation(json));

const languages = ['en', 'fr', 'es'];
store.dispatch(initialize(languages, { defaultLanguage: 'fr' }));

if (localStorage.bookwormJWT) {
    const user = {
        token: "xxx",
        email: "clpcrazyboy@hotmail.com",
        confirmed: true
    };
    store.dispatch(userLoggedIn(user));
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
