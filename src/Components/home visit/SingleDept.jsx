import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { langContext } from '../../Context/LangContext';
import style from './SingleDept.module.css';
export default function SingleDept(props) {
    const {name, nameAR, pic} = props.data;
    const {lang, useLang} = useContext(langContext);
    return <>
    <div className={style.modalContent}>
        <img src={pic} className="img-fluid"/>
        <Link to='/bookvisit'>
        {lang=='en'? nameAR: name}
        </Link>
    </div>
    </>;
}
