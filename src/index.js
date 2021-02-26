import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { counter, addGun, removeGun  } from "./index.redux";
import { createStore } from "redux";
const store = createStore(counter)
function render() {
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun}></App>, document.getElementById('root'))
}
render()
store.subscribe(render)