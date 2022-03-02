import React, { useContext } from 'react';
import style from './SingleItem.module.css';
import {langContext} from '../../../Context/LangContext';
export default function SingleItem(props) {
    const {lang, setLang} = useContext(langContext);
    return <>
        <div className="col-sm-11 col-md-3 flex-lg-column flex-row">
            <div className={style.svg}>
                <img src={props.info.pic} alt="" />
            </div>
            <div>
                <div className={style.part5head}>
                    <h2> 
                        {lang=="en"?props.info.titleAR: props.info.title}
                    </h2>
                </div>
                <div className={style.part5paragraph}>
                    {lang=="en"?props.info.bodyAR: props.info.body}
                </div>
            </div>
        </div>
    </>;
}
