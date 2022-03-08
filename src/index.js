import React, { Suspense, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from '../src/ReactRedux/Store/myStore'
import App from './App';
import { langContext } from './Context/LangContext';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ar', 'en'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'querystring', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

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