import React from 'react';
import {Link} from 'react-router-dom'
import style from './SingleDept.module.css';
export default function SingleDept(props) {
    const {name, pic} = props.data;
    console.log(props.data);
    return <>
    <div className={style.modalContent}>
        <img src={pic} className="img-fluid"/>
        <Link to='/bookvisit'>{name}</Link>
    </div>
    </>;
}
