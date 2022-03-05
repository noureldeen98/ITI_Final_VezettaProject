import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from '../src/ReactRedux/Store/myStore'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

ReactDOM.render(
  <Suspense fallback>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
  ,
  document.getElementById('root')
);