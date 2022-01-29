import React, { useState } from 'react'
import DeptSliderTitle from './DeptSliderTitle';
import style from './deptSlider.module.css';
//pic
import pic1 from '../../../Images/part4/part4p1.png';
import pic2 from '../../../Images/part4/part4p2.png';
import pic3 from '../../../Images/part4/part4p3.png';
import pic4 from '../../../Images/part4/part4p4.png';
import pic5 from '../../../Images/part4/part4p5.png';
import pic6 from '../../../Images/part4/part4p6.png';
import pic7 from '../../../Images/part4/part4p7.png';
import pic8 from '../../../Images/part4/part4p8.png';
import SingleDept from './SingleDept';
import OfferBtn from '../part3/offerSlider/OfferBtn';

export default function DeptSlider() {
    const firstSlider = [
        {pic: pic1, title: 'جلدية'},
        {pic: pic2, title: 'اسنان'},
        {pic: pic3, title: 'نفسي'},
        {pic: pic4, title: 'اطفال وحديثي الولادة'},
    ];
    const secSlider = [
        {pic: pic5, title: 'مخ واعصاب'},
        {pic: pic6, title: 'عظام'},
        {pic: pic7, title: 'نساء وتوليد'},
        {pic: pic8, title: '  انف واذن حنجرة'},
    ];
    const [firstSliderState, setFirstSliderState] = useState(firstSlider);
    const [secSliderState, setSecSliderState] = useState(secSlider);

    return <>
    <div className={style.part4} style={{'width': '100%', 'overflow': 'hidden'}}>
        <DeptSliderTitle />
        <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8 position-relative">
                <div id={`carouselExampleControls2`} className={`carousel slide`} 
                data-bs-ride="carousel">
                    <div className={`carousel-inner position-relative`}  
                    id={style.carousel}>
                        <div className={`carousel-item active`}>
                            <div className="row d-flex">
                                {firstSliderState.map((state, index)=> (
                                    <SingleDept key={index} data={state}/>
                                ))}
                            </div>
                        </div>
                        <div className={`carousel-item`}>
                            <div className="row d-flex">
                                {secSliderState.map((state, index)=> (
                                    <SingleDept key={index} data={state}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* hena l offer btn */}
                    <OfferBtn id="carouselExampleControls2"/>
                </div>
            </div>
        </div>
    </div>
    </>;
}
