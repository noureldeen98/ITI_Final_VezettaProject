import React, {useEffect} from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAreas, getCities, getCommonCity, getOtherCities } from '../../../ReactRedux/Actions/CitiesActionRedux';
import {getCommonDept, getDepts, getOtherDept} from '../../../ReactRedux/Actions/DeparmentsAction';
import style from './bigTab.module.css';
import {useHistory} from 'react-router-dom'
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import { useTranslation } from 'react-i18next';
export default function BigTab() {
    const [t, i18n] = useTranslation();
    // tab-pane fade in active 
    const dispatch = useDispatch();
    const depts = useSelector((state) => state.deptReducer);
    const cities = useSelector((state) => state.citiesReducer);
    const [count, setCount] = useState(1);
    const [selectedDpts, setSelectedDpts] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    //query param
    const history = useHistory();
    //for localizrion
    const {lang, setLang} = useContext(langContext);
    //to get areas for specific doc when click
    //id allcities as default
    const [docID, setDocID] = useState('xMmi45pdpT6O3gxorKAC'); 
    const areas = useSelector(state => state.citiesReducer.areas);
    useEffect(() => {
        //da ll depts
        dispatch(getDepts());
        //da ll cities
        dispatch(getCities());
        dispatch(getCommonCity());
        dispatch(getOtherCities())
        //da ll cities
        dispatch(getAreas(docID));
    }, [])

    //useEfect
    useEffect(() => {
        dispatch(getCommonDept(count));
        dispatch(getOtherDept(count));
    }, [count]);
    const nextDpts = (e) => {
        e.preventDefault();
        const nextCount = count===3 ? 3 : count+1; 
        setCount(nextCount);
    }
    const prevDpts = (e) => {
        e.preventDefault();
        const nextCount = count===1 ? 1 : count-1; 
        setCount(nextCount)
    }
    const setDpts = (e) => {
        setSelectedDpts(e.target.outerText)
    } 
    const setCity = (e, id) => {
        // console.log('from setcity', id);
        setDocID(id); //id of specific doc to get related Areas
        setSelectedCity(e.target.outerText)
    }
    const setArea = (e) => {
        setSelectedArea(e.target.outerText)
    }
    const setDoctorName = (e) => {
        setSelectedDoctor(e.target.value);
    }
    const goToDoctorPage = () => {
        history.push({
            pathname: '/DoctorCall',
            search: `?dpt=${selectedDpts}&city=${selectedCity}&area=${selectedArea}&doc=${selectedDoctor}`
        });
    }
    useEffect(() => {
        dispatch(getAreas(docID))
    }, [docID])

    return <>
        <div className={`d-flex align-items-center
                    ${style.reserveID}`} id={style.reserve}>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                aria-expanded="false">
                    <h5>
                        {t('part7.specialty')}
                    </h5>
                    <h3>
                        <i className="fas fa-stethoscope"></i>
                        <span className="deptTitle">
                        {selectedDpts==''?  (t('part7.specialty2')) : selectedDpts}
                        </span>
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer}>
                        <div className="right">
                            <span>
                                <li className='mx-2' disabled id="sItem">
                                    {t('part7.popular')}
                                </li>
                            </span>
                            {
                            depts.commonDpts.map(el => (
                                <li key={el.name} onClick={(e) => setDpts(e)}>
                                    <a className={`dropdown-item ${style.common}`} 
                                    href="#" style={{'color': '#0070cd'}}>
                                    {lang=='en'? el.nameAR : el.name}
                                    </a>
                                </li>
                                ))
                            } 
                            
                            {/* <!----awel part x el-t5sosat------> */}
                        </div>
                        <div className="left">
                            <span>
                            <li className='mx-3' style={{width: 'max-content'}}>
                            {t('part7.other')}
                            </li>
                        </span>
                        {
                        depts.otherDpts.map(el => (
                            <li key={el.name} onClick={(e) => setDpts(e)}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {lang=='en'? el.nameAR : el.name} 
                                </a>
                            </li>
                            ))
                            }
                            {/* <!----awel part x el-t5sosat------> */}
                        </div>
                    </div>
                    {/* <div className={style.footer}>
                        <button className={style.sliderBtn}
                        onClick={(e) => prevDpts(e)}>
                            <i className='fas fa-arrow-right mx-2'></i>
                        </button>
                        <span>{t('part7.page')} {count}\3</span>
                        <button className={style.sliderBtn} 
                        onClick={(e) => nextDpts(e)}>
                            <i className='fas fa-arrow-left mx-2'></i>
                        </button>
                    </div> */}
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                    <h5>{t('part7.city')}</h5>
                    <h3>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="deptTitle">
                        {selectedCity==''? (t('part7.city2')) : selectedCity}
                        </span>
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu2}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer} id="cities">
                        <div className="right">
                            <span>
                                <li className='mx-3' id='sItem'>
                                {t('part7.popular')}
                                </li>
                            </span>
                            {
                            cities.commonCities.map(el => (
                                <li key={el.id} onClick={(e, id) => setCity(e, el.id)}>
                                    <a className={`dropdown-item ${style.common}`} 
                                    href="#" style={{'color': '#0070cd'}}>
                                        {lang=='en'? el.nameAR : el.name} 
                                    </a>
                                </li>
                                ))
                            } 
                            {/* here */}
                        </div>
                        <div className="left">
                            <span>
                                <li  style={{width: 'max-content'}} className="mx-3">
                                    {t('part7.other2')}
                                </li>
                            </span>
                            {
                            cities.otherCities.map(el => (
                                <li key={el.name} onClick={(e, id) => setCity(e, el.id)}>
                                    <a className={`dropdown-item ${style.common}`} 
                                    href="#" style={{'color': '#0070cd'}}>
                                        {lang=='en'? el.nameAR : el.name}
                                    </a>
                                </li>
                                ))
                            } 
                        </div>
                    </div>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <h5>{t('part7.area')}</h5>
                    <h3>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="deptTitle">
                            {selectedArea==''?  (t('part7.area2')) : selectedArea}
                        </span>
                        {/* <!--here--> */}
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu}`} 
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer} id="areas">
                        <div className="right">
                        {lang=='en'? (
                            areas && areas.areasAR &&
                        areas.areasAR.map(el => (
                            <li key={el} onClick={(e) => setArea(e)}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el} 
                                </a>
                            </li>
                            ))
                        ) : (
                            areas && areas.areas &&
                        areas.areas.map(el => (
                            <li key={el} onClick={(e) => setArea(e)}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el} 
                                </a>
                            </li>
                            ))
                        )}
                        
                        </div>
                    </div>
                </ul>
            </div>
            <div className={style.doc}>
                <h5>
                    {t('part7.search')}
                </h5>
                <h3>
                    <i className="fas fa-user-md"></i>
                    {/* <span> الدكتور او المستشفى</span> */}
                    <input type="text" placeholder={t('part7.doctor')}
                    className={style.docInp} value={selectedDoctor} 
                    onChange={(e) => setDoctorName(e)} />
                </h3>
            </div>
            <div className="text-light  d-flex">
                <button className='btn btn-danger' id={style.btn1} onClick={goToDoctorPage}>
                    {/* <i className="fas fa-search"></i> */}
                    {t('part7.search2')}
                </button>
            </div>
        </div>
    </>
}
