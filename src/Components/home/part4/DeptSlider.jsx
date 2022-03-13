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
import { useTranslation } from 'react-i18next';

export default function DeptSlider() {
    // const firstSlider = [
    //     {pic: pic1, titleAR: 'جلدية', title:'Skin'},
    //     {pic: pic2, titleAR: 'اسنان', title:'Teath'},
    //     {pic: pic3, titleAR: 'نفسي', title: 'Behavioral'},
    //     {pic: pic4, titleAR: 'اطفال وحديثي الولادة', title:'Child'},
    // ];
    // const secSlider = [
    //     {pic: pic5, titleAR: 'مخ واعصاب',title: 'Brain & Nerves'},
    //     {pic: pic6, titleAR: 'عظام', title: 'Bones'},
    //     {pic: pic7, titleAR: 'نساء وتوليد', title: ' Gynaecology and Infertility'},
    //     {pic: pic8, titleAR: '  انف واذن حنجرة', title: 'Ear, Nose and Throat'},
    // ];
    // const [firstSliderState, setFirstSliderState] = useState(firstSlider);
    // const [secSliderState, setSecSliderState] = useState(secSlider);
    const [t, i18n] = useTranslation();
    const picOne = [pic1, pic2, pic3, pic4];
    const picTwo = [pic4, pic5, pic6, pic8];

    const firstSlider = t('part4.firstSlider', {returnObjects: true }) ;
    const secSlider = t('part4.secSlider', {returnObjects: true }) ;

    return <>
    <div className={`${style.part4} py-5`} style={{'width': '100%', 'overflow': 'hidden'}}>
        <DeptSliderTitle />
        <div className="row justify-content-center">
            <div className="col-11 col-md-11 col-lg-8 position-relative">
                <div id={`carouselExampleControls2`} className={`carousel slide`} 
                data-bs-ride="carousel">
                    <div className={`carousel-inner position-relative`}  
                    id={style.carousel}>
                        <div className={`carousel-item active`}>
                            <div className="row d-flex">
                                {firstSlider.map((state, index)=> (
                                    <SingleDept key={index} data={{...state, pic: picOne[index]}}/>
                                ))}
                            </div>
                        </div>
                        <div className={`carousel-item`}>
                            <div className="row d-flex">
                                {secSlider.map((state, index)=> (
                                    <SingleDept key={index} data={{...state, pic:picTwo[index]}}/>
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
