import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = 'application/json';





// shared in all files
axios.interceptors.request.use(request => {
    console.log(request)
    return request // ALWAYS!!!! or the request is blocked
}, error => {   // error handling for requests
    console.log(error);
    return Promise.reject(error); 

})


axios.interceptors.response.use(response => {
    console.log(response)
    return response 
}, error => {   // error handling for response
    console.log(error);
    return Promise.reject(error); 
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
