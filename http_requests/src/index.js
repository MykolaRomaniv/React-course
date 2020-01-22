import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.request.use(config => {
    console.log(config);
    //Edit config
    return config;
}, error => {               //catchs erros from all sources
    console.log(error); 
    return Promise.reject(error);  // forward it to error sousce
});

axios.interceptors.response.use(config => {
    console.log(config);
    //Edit config
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
