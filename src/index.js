import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers/Reducers";

// strore
const store = createStore(reducers);

ReactDOM.render(
    // Provider : yang membuat store menjadi tersedia untuk Component child
    // olehkarena itu app dibungkus oleh provider
    <Provider store={store}>
        <App1/>
    </Provider>,
    document.getElementById('root')
);