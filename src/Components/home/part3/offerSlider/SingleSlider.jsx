import React from 'react';
import style from './SingleSlider.module.css';
export default function SingleSlider(props) {
    return <>
    <div className="col-6 col-md-3 ">
        <div className="card position-relative" >
            <a href="./healthOfTeath.html">
                <img src={props.data.pic} 
                className="card-img-top" alt="..."/>
            </a>
            <div className="card-body">
                <h5 className={style.cT}> {props.data.title}</h5>
                <p>
                    <span> {props.data.oldPrice} جنيه</span>
                    <span> {props.data.newPrice} جنيه</span>
                </p>
                <p>{props.data.offer} عرض</p>
            </div>
            <span className={`badge ${style.descound} bg-danger position-absolute 
                translate-middle`} > {props.data.discount} خصم 
            </span>
        </div>
    </div>
    </>
}
