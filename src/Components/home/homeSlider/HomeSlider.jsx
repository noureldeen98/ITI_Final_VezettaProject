import React, { useState } from 'react';
import style from './HomeSlider.module.css';
import slider1Pic from '../../../Images/homeslider/slider1.jpg';
import slider2Pic from '../../../Images/homeslider/slider2.jpg';
import slider3Pic from '../../../Images/homeslider/slider3.jpg';

export default function HomeSlider() {
    // slider
    // const [count, setCount] = (1);
    // const [sliderPic, setSliderPic] = useState();
    return <>
        <div id="carouselExampleSlidesOnly" 
        className={`${style['carousel']} slide ${style['row']}`}
            data-bs-ride="carousel">
            <div className={`${style['carousel-inner']}`}>
                <div className={`${style['carousel-item']} active`}>
                    <img src={slider1Pic}
                    className="d-block w-100" alt="..."/>
                </div>
                <div className={`${style['carousel-item']}`}>
                    <img src={slider2Pic}
                    className="d-block w-100" alt="..."/>
                </div>
                <div className={`${style['carousel-item']}`}>
                    <img src={slider3Pic} 
                    className="d-block w-100" alt="..."/>
                </div>
            </div>
            <div className={`${style['sliderContent']}`}>
                <div className= {`${style['top']} row justify-content-end my-5`}>
                    <div className="col-lg-11 col-lg-12">
                        <h1>رعاية صحيه لحياه افضل ليك</h1>
                        <h2 className="d-none d-md-flex"> احجز اونلاين او كلم <span> 
                            <i className="fas fa-phone text-danger"></i></span> 16676</h2>
                    </div>
                </div>
                {/* here component of lab device */}
            </div>
            {/* <!------------layout for mobile here-----------------> */}
        </div>
    </>;
}
