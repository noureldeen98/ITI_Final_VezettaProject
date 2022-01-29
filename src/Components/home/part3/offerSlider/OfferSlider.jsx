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
 
export default function OfferSlider() {
    let firstSlider = [
        {pic: pic1, discount: '75%', title: 'تنظيف اسنان',
        oldPrice: 400, newPrice: 100, offer:772},
        {pic: pic2, discount: '46%', title: ' تنظيف البشرة',
        oldPrice: 150, newPrice: 81, offer:488},
        {pic: pic3, discount: '50%', title: 'تركيب التقويم المعدنى',
        oldPrice: 6400, newPrice: 3200, offer:44},
        {pic: pic4, discount: '46%', title: 'تقشير الوجه',
        oldPrice: 150, newPrice: 81, offer:86}
    ]
    let secondSlider = [
        {pic: pic5, discount: '74%', title: 'فيتامين-د',
        oldPrice: 777, newPrice: 202, offer:2},
        {pic: pic6, discount: '59%', title: 'ازالة الشعر بالليزر',
        oldPrice: 2000, newPrice: 820, offer:199},
        {pic: pic7, discount: '58%', title: 'انقاص الوزن',
        oldPrice: 1800, newPrice: 756, offer:79},
        {pic: pic8, discount: '60%', title: 'تصحيح النظر',
        oldPrice: 6000, newPrice: 2400, offer:151}
    ]
    const [firstSliderState, setFirstSliderState] = useState(firstSlider);
    const [secSliderState, setSecSliderState] = useState(secondSlider)
    return <>
        <OfferTitle />
        {/* hena l slider */}
        <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8 position-relative">
                <div id="carouselExampleControls" className={`carousel slide`} 
                data-bs-ride="carousel">
                    <div className={`carousel-inner position-relative`}  
                    id={style.carousel}>
                        <div className={`carousel-item active`}>
                            <div className="row d-flex">
                                {firstSliderState.map((state, index)=> (
                                    <SingleSlider key={index} data={state}/>
                                ))}
                            </div>
                        </div>
                        <div className={`carousel-item`}>
                            <div className="row d-flex">
                                {secSliderState.map((state, index)=> (
                                    <SingleSlider key={index} data={state}/>
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
