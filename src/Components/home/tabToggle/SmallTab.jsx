import React from 'react';
import style from './smallTab.module.css';
export default function SmallTab() {
    // tab-pane fade
    return <>
    <div className={`${style.call1} col-6 d-flex align-items-center
                `} id='call'>
        <div className={`${style.c1} flex-3`} style={{"flex": 3}}>
            <h5>انا ابحث عن دكتور</h5>
            <h3>
                <i className="fas fa-stethoscope"></i>
                <span>اختار التخصص</span>
            </h3>
        </div>
        <div className={`${style.c2} flex-2 bg-danger`} style={{"flex": 1}}>
            <h3>
                <i className="fas fa-search"></i>
                <span> ابحث</span>
            </h3>
        </div>
    </div>
    </>;
}
