import React from 'react';
import { useContext } from 'react';
import {langContext} from '../../../../Context/LangContext';
import style  from  './OfferSliderTitle.module.css';
export default function OfferSliderTitle() {
    const {lang, setLang} = useContext(langContext)
    return <>
        <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8" 
            style={{'marginBottom': '2em', 'color': 'rgb(111, 112, 114)'}}>
                <h2 className={style.c}>
                    <span id="oSpan2">
                        {lang=='en'? 'اختار من احسن العروض' : 'Choose from top offers'}
                    </span>
                    <span style={{'float': lang=='en'? 'left': 'right'}} id="oSpan">
                        <a href="#" className={`fs-5 ${style.id}`}>
                            <span className={style.id}>
                            {lang=='en'? '  كل العروض' : 'All Offers'}
                            </span>
                            <span><i className="fas fa-caret-left text-danger"
                            ></i></span>
                        </a>
                    </span>
                </h2>
            </div>
        </div>
    </>;
}
