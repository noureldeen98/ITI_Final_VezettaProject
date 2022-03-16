import React, { useContext } from 'react';
import style from './SingleItem.module.css';
import {langContext} from '../../../Context/LangContext';
export default function SingleItem(props) {
    return <>
        <div className="col-sm-11 col-md-3 flex-lg-column flex-row">
            <div className={style.svg}>
                <img src={props.info.pic} alt="" />
            </div>
            <div>
                <div className={style.part5head}>
                    <h2> 
                        {props.info.title}
                    </h2>
                </div>
                <div className={style.part5paragraph}>
                    {props.info.body}
                </div>
            </div>
        </div>
    </>;
}
