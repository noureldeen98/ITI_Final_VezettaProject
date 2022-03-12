import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langDetector from 'i18next-browser-languagedetector';
import en from './lang/home/en.json';
import ar from './lang/home/ar.json';
import { useState } from "react";
//context
import React from 'react'

const resources = {
    en: {
        translation: ar
    },
    ar: {
        translation: en
    }
};

i18n
.use(langDetector)
    .use(initReactI18next) 
    .init({
    resources,
    lng: localStorage.getItem('i18nextLng'), 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
});
export default i18n
// export {lang, setLang, i18next};