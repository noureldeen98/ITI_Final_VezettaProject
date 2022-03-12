import React, { useContext } from 'react';
import { langContext } from '../../../../Context/LangContext';
import style from './SingleSlider.module.css';
export default function SingleSlider(props) {
    const {lang, setLang} = useContext(langContext);

    return <>
    <div className="col-6 col-md-3 ">
        <div className="card position-relative" >
            <a href="./healthOfTeath.html">
                <img src={props.data.pic} 
                className="card-img-top" alt="..."/>
            </a>
            <div className="card-body">
                <h5 className={style.cT}>
                    {props.data.title} 
                </h5>
                <p>
                    <span> {props.data.oldPrice} {lang=='en'? 'جنيه' : 'EGP'}</span>
                    <span> {props.data.newPrice} {lang=='en'? 'جنيه' : 'EGP'}</span>
                </p>
                <p>{props.data.offer} {lang=='en' ? 'عرض' : 'Offers'}</p>
            </div>
            <span className={`badge ${style.descound} bg-danger position-absolute 
                translate-middle`} > {props.data.discount} {lang=='en'? 'خصم' : 'OFF'} 
            </span>
        </div>
    </div>
    </>
}
