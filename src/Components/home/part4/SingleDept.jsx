import React from 'react';
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import style from './SingleDept.module.css';
export default function SingleDept(props) {
    const {lang, setLang} = useContext(langContext);
    return <>
    <div className="col-6 col-md-3 ">
        <div className="card position-relative" >
            <a href="./healthOfTeath.html">
                <img src={props.data.pic} 
                className="card-img-top" alt="..."/>
            </a>
            <div className="card-body">
                <h2 className={style.cT} > 
                {props.data.title}
                </h2>
            </div>
        </div>
    </div>
    </>;
}
