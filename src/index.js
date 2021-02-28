import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createShaDaPao, } from "./index.redux";
import { createStore, applyMiddleware, compose} from "redux";
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk'
const reduxDevtools = Window.devToolsExtension?Window.devToolsExtension():f=>f
const store = createStore(createShaDaPao,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

ReactDOM.render(
    (<Provider  store={store}>
        <App/>
    </Provider>),
    document.getElementById('root'))
