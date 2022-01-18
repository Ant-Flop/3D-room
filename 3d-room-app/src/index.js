import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/reducers";


const RerenderDOM = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

RerenderDOM();

store.subscribe(() =>{
    console.log('change')
    RerenderDOM();
})


