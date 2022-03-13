import React, { useState, useContext } from 'react';
import style from './HomeSlider.module.css';
import slider1Pic from '../../../Images/homeslider/slider1.jpg';
import slider2Pic from '../../../Images/homeslider/slider2.jpg';
import slider3Pic from '../../../Images/homeslider/slider3.jpg';
import BigTab from '../tabToggle/BigTab';
import SmallTab from '../tabToggle/SmallTab';
import { useTranslation } from 'react-i18next';

export default function HomeSlider() {
    const [bigTab, setBigTab] = useState(true);
    const [smallTab, setSmallTab] = useState(false);
    const [t, i18n] = useTranslation();

    const toggleBigTab = () => {
        setSmallTab(false);
        setBigTab(true)
    }

    const toggleSmallTab = () => {
        setBigTab(false);
        setSmallTab(true);
    }
    const [tab, setTab] = useState(1);
    const toggleToClinic = () => {
        setTab((s) => 1);
    };
    const toggleToMedicine = () => {
        setTab((s) => 2);
    };
    const toggleToCall = () => {
        setTab((s) => 3);
    };
    return <>
        <div id="carouselExampleSlidesOnly" 
        className={`${style['carousel']} slide ${style['row']}`}
            data-bs-ride="carousel">
            <div className={`${style['carousel-inner']}`}>
                <div className={`carousel-item active`} id={`${style.item}`}>
                    <img src={slider1Pic}
                    className="d-block w-100" alt="..."/>
                </div>
                <div className={`carousel-item`} id={`${style.item}`}>
                    <img src={slider2Pic}
                    className="d-block w-100" alt="..."/>
                </div>
                <div className={`carousel-item`} id={`${style.item}`}>
                    <img src={slider3Pic} 
                    className="d-block w-100" alt="..."/>
                </div>
            </div>
            <div className={`${style['sliderContent']}`}>
                <div className= {`${style['top']} row justify-content-end my-5`}>
                    <div className="col-lg-11 col-lg-12">
                        <h1>
                            {t('homeSlider.sliderContent.life')}
                        </h1>
                        <h2 className="d-none d-md-flex">
                            {t('homeSlider.sliderContent.book')}
                        <span> 
                            <i className="fas fa-phone text-danger"> </i></span> 16676</h2>
                    </div>
                </div>
                <div 
                className={`${style.bottom} row border rounded-5 card d-none d-md-flex`}
                style={{"borderRadius": "10px"}}>
                    <div className="col-12 nav nav-tabs">
                        <div className={`${style.first} col-12 row`}>
                            <a 
                            className={`${style.reserve} ${bigTab ? style.reserveActive: style.x} col-6 d-flex align-items-center active`}
                                data-toggle="tab" href="#reserve"
                                onClick={toggleBigTab}>
                                <div><i className="far fa-calendar-check"></i></div>
                                <div>
                                    <h1>{t('homeSlider.sliderContent.book2')}</h1>
                                    <h4> {t('homeSlider.sliderContent.examination')}</h4>
                                </div>
                            </a>
                            <a className={`${style.call} ${smallTab ? style.activeCall: style.x} col-6 d-flex align-items-center`}
                            data-toggle="tab" href="#call" onClick={toggleSmallTab}>
                                <div> <i className="fas fa-headphones"></i></div>
                                <div>
                                    <h1> {t('homeSlider.sliderContent.telehealth')} </h1>
                                    <h4>  {t('homeSlider.sliderContent.consultaion')} </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={`${style.second} tab-content`}>
                        {/* da goz2 awel tab h7od component here bta3 labToggle*/}
                        
                        {bigTab && <BigTab /> } 
                        { smallTab &&  <SmallTab />}
                        {/* da goz2 tani tab h7od component here bta3 smallToggle*/}
                        
                    </div>
                </div>
            </div>

            {/* <!------------layout for mobile here-----------------> */}
            <div className={`${style.bottomMob} row border rounded-5 d-md-none card`} 
            style={{"borderRadius": '10px'}}>
                <div className="col-12 ">
                    <div className={`${style.firstMob} col-12 row nav nav-tabs`}>
                        <a className={`${style.clinic} active col-4 d-flex flex-column 
                            align-items-center`}
                            data-toggle="tab" href="#clinic">
                            <h4><i className="fas fa-clinic-medical"></i></h4>
                            <h4 onClick={() =>toggleToClinic()}>
                                {t('homeSlider.mobile.clinic')}
                            </h4>
                        </a>
                        <a className={`${style.drug} col-4 d-flex flex-column align-items-center`}
                        data-toggle="tab" href="#drug" onClick={toggleToMedicine}>
                            <h4><i className="fas fa-pills"></i></h4>
                            <h4> 
                                {t('homeSlider.mobile.order')}
                            </h4>
                        </a>
                        <a className={`${style.calldoc} col-4 d-flex flex-column align-items-center`}
                        data-toggle="tab" href="#calldoc" onClick={toggleToCall}>
                            <h4><i className="fas fa-phone"></i></h4>
                            <h4> 
                            {t('homeSlider.mobile.call')}
                            </h4>
                        </a>
                    </div>
                    <div className={`${style.secondMob} row tab-content`}>
                        {tab == 1 && ( 
                        <div className={`col-12 d-flex align-items-center`} id={style.clinic}>
                            <div className="col-12">
                                <div>
                                    <div className="mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        placeholder={t('homeSlider.mobile.tab1.search')}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" 
                                        className="form-control" 
                                        placeholder={t('homeSlider.mobile.tab1.area')}/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger mb-3"
                                style={{"width": "inherit"}}>
                                    {t('homeSlider.mobile.tab1.browse')}</button>
                                <h4>{t('homeSlider.mobile.tab1.call')} <a>16676</a></h4>
                            </div>
                        </div>
                        )}
                        {tab ==2 && (
                        <div className={`col-12 d-flex flex-column align-items-center
                        `} id={style.drug}>
                            <div className="input-group flex-nowrap position-relative"
                            style={{"border":"1px solid rgb(0, 112, 205)"}}>
                                <input type="text" className="form-control" 
                                placeholder={t('homeSlider.mobile.tab2.search')}>
                
                                </input>
                            </div>
                            <h4 className='my-3'>{t('homeSlider.mobile.tab2.call')} <a>16676</a></h4>
                        </div>
                        )}
                        {tab == 3 && ( 
                        <div className={`col-12 d-flex flex-column align-items-center`} id={style.calldoc}>
                            <div className="mb-3"
                                style={{"width": "inherit", "border": "1px solid rgb(0, 112, 205)"}}>
                                <input type="text" 
                                className="form-control" 
                                placeholder={t('homeSlider.mobile.tab3.search')}/>
                            </div>
                            <button type="submit" className="btn btn-danger mb-3" style={{"width": "inherit"}}>
                                {t('homeSlider.mobile.tab3.browse')}</button>
                            <h4>{t('homeSlider.mobile.tab3.call')} <a>16676</a></h4>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>;
}
