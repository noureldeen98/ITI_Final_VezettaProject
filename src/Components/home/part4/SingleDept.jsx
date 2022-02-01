import React from 'react';
import style from './SingleDept.module.css';
export default function SingleDept(props) {
    return <>
    <div className="col-6 col-md-3 ">
        <div className="card position-relative" >
            <a href="./healthOfTeath.html">
                <img src={props.data.pic} 
                className="card-img-top" alt="..."/>
            </a>
            <div className="card-body">
                <h5 className={style.cT}> {props.data.title}</h5>
            </div>
        </div>
    </div>
    </>;
}
