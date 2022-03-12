import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import myStore from '../src/ReactRedux/Store/myStore'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
  <Provider store={myStore}>
    <App />
  </Provider> 
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
