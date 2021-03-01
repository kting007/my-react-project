import React from 'react';
import ReactDOM from 'react-dom';
import  Reducer from './reducer'
import { createStore, applyMiddleware, compose} from "redux";
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk'
import {BrowserRouter,Link,Route, Redirect, Switch} from 'react-router-dom'
import Dashboard from './dashboard'
import Login from './login'

const reduxDevtools = Window.devToolsExtension?Window.devToolsExtension():f=>f
const store = createStore(Reducer,compose(
    applyMiddleware(thunk),
    reduxDevtools
))
function Text(){
    return <h1>默认页面</h1>
}

ReactDOM.render(

    (<Provider  store={store}>
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>默认</Link>
                    <Link to='/login'>登录</Link>
                    <Link to='/DashUrl'>Home</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/' exact component={Text}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/DashUrl' component={Dashboard}></Route>
            </Switch>

        </BrowserRouter>
    </Provider>),
    document.getElementById('root'))
