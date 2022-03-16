import React, { useState } from 'react';
import OfferTitle from './OfferSliderTitle'
import SingleSlider from './SingleSlider';
import style from './offerSlider.module.css';
//images
import pic1 from '../../../../Images/part3/part3p1.png';
import pic2 from '../../../../Images/part3/part3p2.png';
import pic3 from '../../../../Images/part3/part3p3.png';
import pic4 from '../../../../Images/part3/part3p4.png';
import pic5 from '../../../../Images/part3/part3p5.png';
import pic6 from '../../../../Images/part3/part3p6.png';
import pic7 from '../../../../Images/part3/part3p7.png';
import pic8 from '../../../../Images/part3/part3p8.png';
import OfferBtn from './OfferBtn';
import { useTranslation } from 'react-i18next';
 
export default function OfferSlider() {
    const [t, i18n] = useTranslation();
    let firstSlider = t('part3.offer.firstSlider', {returnObjects: true });
    let secSlider = t('part3.offer.secSlider', {returnObjects: true });
    const picOne = [pic1, pic2, pic3, pic4];
    const picTwo = [pic5, pic6, pic7, pic8];
    return <>
        <OfferTitle />
        {/* hena l slider */}
        <div className="row justify-content-center my-5">
            <div className="col-11 col-md-11 col-lg-8 position-relative">
                <div id="carouselExampleControls" className={`carousel slide`} 
                data-bs-ride="carousel">
                    <div className={`carousel-inner position-relative`}  
                    id={style.carousel}>
                        <div className={`carousel-item active`}>
                            <div className="row d-flex">
                                {firstSlider.map((state, index)=> (
                                    <SingleSlider key={index} data={{...state, pic:picOne[index]}}/>
                                ))}
                            </div>
                        </div>
                        <div className={`carousel-item`}>
                            <div className="row d-flex">
                                {secSlider.map((state, index)=> (
                                    <SingleSlider key={index} data={{...state, pic:picTwo[index]}}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* hena l offer btn */}
                    <OfferBtn id="carouselExampleControls"/>
                    
                </div>
            </div>
        </div>
    </>;
}
