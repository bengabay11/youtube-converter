import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from "./components/App";
import {rootReducer} from "./reducers/root-reducer";
import {loadStateFromLocalStorage, saveStateToLocalStorage} from "./services/local-storage";
import "./styles/index.css"

let state = loadStateFromLocalStorage();
const store = createStore(rootReducer, state);
store.subscribe(() => {
    let state = store.getState();
    saveStateToLocalStorage(state);
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

