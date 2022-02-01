import React from 'react';
import style from './BookFooter.module.css';
export default function BookFooter() {
    return <>
    <div className={`row justify-content-center`}>
        <div className={`col-md-8 col-12 ${style.footer}`}>
            <h5 >
                جميع الحقوق محفوظة 2022
            </h5>
        </div>
    </div>
    </>;
}
