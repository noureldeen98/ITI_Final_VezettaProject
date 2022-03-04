import React, { useContext } from 'react';
import style from './deptSliderTitle.module.css';
import {langContext} from '../../../Context/LangContext';
export default function DeptSliderTitle() {
    const {lang, setLang} = useContext(langContext);
    return <>
    <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8" 
            style={{'marginBottom': '2em', 'color': 'rgb(111, 112, 114)'}}>
                <h2 className={style.c} id="dHead">
                    <span>
                        {lang=='en'? 'اكشف حسب التخصص': 'Book from top specialties'}
                    </span>
                </h2>
            </div>
        </div>
    
    </>;
}
