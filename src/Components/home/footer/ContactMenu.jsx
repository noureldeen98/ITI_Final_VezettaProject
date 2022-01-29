import React from 'react';
import style from './contactMenu.module.css';
import pic1 from '../../../Images/footer/part7p1.png';
import pic2 from '../../../Images/footer/part7p2.png';
export default function ContactMenu() {
    return <>
        <div className={`col-5 col-md-2 mx-md-2 mx-lg-0 ${style.col5}`}>
            <img src={pic1}alt="" 
            className="img-fluid"/>
            <img src={pic2} alt="" 
            className="img-fluid"/>
            <span id={style.col5Span}>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </span>
        </div>
    </>;
}
