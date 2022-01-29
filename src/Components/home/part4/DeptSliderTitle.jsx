import React from 'react';
import style from './deptSliderTitle.module.css';
export default function DeptSliderTitle() {
    return <>
    <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8" 
            style={{'marginBottom': '2em', 'color': 'rgb(111, 112, 114)'}}>
                <h2 className={style.c}>
                    <span>  اكشف حسب التخصص  </span>
                </h2>
            </div>
        </div>
    
    </>;
}
