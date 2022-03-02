import React from 'react';
import { useContext } from 'react';
import { langContext } from '../../Context/LangContext';
import style from './BookFooter.module.css';
export default function BookFooter() {
    const {lang, setLang} = useContext(langContext);
    return <>
    <div className={`row justify-content-center`}>
        <div className={`col-md-8 col-12 ${style.footer}`}>
            <h5 >
                {lang=='en'? ' جميع الحقوق محفوظة 2022' : 'all right are reserved 2022'}
            </h5>
        </div>
    </div>
    </>;
}
