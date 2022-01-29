import React from 'react';
import style  from  './OfferSliderTitle.module.css';
export default function OfferSliderTitle() {
    return <>
        <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8" 
            style={{'marginBottom': '2em', 'color': 'rgb(111, 112, 114)'}}>
                <h2 className={style.c}>
                    <span> اختار من احسن العروض </span>
                    <span style={{'float': 'left'}}>
                        <a href="#" className={`fs-5 ${style.id}`}>
                            <span className={style.id}> كل العروض </span>
                            <span><i className="fas fa-caret-left text-danger"
                            ></i></span>
                        </a>
                    </span>
                </h2>
            </div>
        </div>
    </>;
}
