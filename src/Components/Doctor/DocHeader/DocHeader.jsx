import './docHeaderStyle.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './../../home/tabToggle/bigTab.module.css'
import { getAreas, getCities, getCommonCity, getOtherCities } from '../../../ReactRedux/Actions/CitiesActionRedux';
import { getCommonDept, getDepts, getOtherDept } from '../../../ReactRedux/Actions/DeparmentsAction';
import { useHistory, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';


const DocHeader = () => {
    const params = useParams();
    console.log(params.name)
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
    const { lang, setLang } = useContext(langContext);
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
        const nextCount = count === 3 ? 3 : count + 1;
        setCount(nextCount);
    }
    const prevDpts = (e) => {
        e.preventDefault();
        const nextCount = count === 1 ? 1 : count - 1;
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

    // const depts = useSelector((state) => state.deptRed);
    //normal redux
    // const dpts = useSelector(state => state.dptReduxReducer.depts);
    // const [allDepts, setAllDepts] = useState([dpts]);
    // // const allDepts = [dpts]
    // const [commonDepts, setCommonDepts] = useState([]);
    // const [otherDepts, setOtherDepts] = useState([]);
    // const [counter, setCounter] = useState(1);
    // const getCommonDpts = () => {
    //     allDepts.map(dpt => {
    //         if( dpt && dpt.common) {
    //             setCommonDepts(oldArr => [...oldArr, dpt]);
    //             // if(counter == 1) {
    //             //     setCommonDepts(oldArr => oldArr.slice(0,9))
    //             // };
    //             // if(counter == 2) {
    //             //     setCommonDepts(oldArr => oldArr.slice(10,19))
    //             // }
    //             // if(counter == 3) {
    //             //     setCommonDepts(oldArr => oldArr.slice(20,commonDepts.length-1))
    //             // }

    //         }
    //     })
    // }
    // const getOtherDpts = () => {
    //     allDepts.map(dpt => {
    //         if( dpt && dpt.other) {
    //             setOtherDepts(oldArr => [...oldArr, dpt]);
    //         }
    //     })
    // }
    // //cities
    // const cities = useSelector(state => state.citiesReduxReducer.cities);
    // const [allCities, setAllCities] = useState([cities]);
    // const [commonCities, setCommonCities] = useState([]);
    // const [otherCities, setOtherCities] = useState([]);
    // const getCommonCities = () => {
    //     allCities.map(city => {
    //         if(city && city.common) {
    //             setCommonCities(oldArr => [...oldArr, city]);
    //         }
    //     })
    // }
    // const getOtherCities = () => {
    //     allCities.map(city => {
    //         if(city && city.other) {
    //             setOtherCities(oldArr => [...oldArr, city]);
    //         }
    //     })
    // }

    // //areas
    // const areas = useSelector(state => state.areasReduxReducer.areas);
    // const [allAreas, setAllAreas] = useState([areas]);
    // const [commonAreas, setCommonAreas] = useState([]);
    // const [otherAreas, setOtherAreas] = useState([]);
    // const getCommonAreas = () => {
    //     allAreas.map(area => {
    //         if(area && area.common) {
    //             setCommonAreas(oldArr => [...oldArr, area]);
    //         }
    //     })
    // }
    // const getOtherAreas = () => {
    //     allAreas.map(area => {
    //         if(area && area.other) {
    //             setOtherAreas(oldArr => [...oldArr, area]);
    //         }
    //     })
    // }
    // //useEfect
    // useEffect(() => {
    //     // dispatch(getDepts());
    //     // dispatch(getAllDepts());
    //     setAllDepts(oldDept => oldDept[0]);
    //     // setAllDepts(dpts)
    //     //cities
    //     // dispatch(getAllCities());
    //     setAllCities(oldArr => oldArr[0]);
    //     //Areas
    //     // dispatch(getAllAreas());
    //     setAllAreas(oldArr => oldArr[0]);
    // }, []);
    // //deots
    // useEffect(() => {
    //     getCommonDpts();
    //     getOtherDpts();
    // }, [allDepts])
    // //cities
    // useEffect(() => {
    //     getCommonCities();
    //     getOtherCities();
    // }, [allCities])
    // //areas
    // useEffect(() => {
    //     getCommonAreas();
    //     getOtherAreas();
    // }, [allAreas])
    // // 0-9 ==== 10-18 === 19-length
    // const nextDept = () => {
    //     if(counter == 3) {
    //         setCounter(counter);
    //     }
    //     else {
    //         setCounter(++counter)
    //     }
    // }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="img-fluid " id="img1" >
                        <p className="text-secondary fs-4 fw-bold">احجز الآن مع دكتور {params.name}</p>
                        <p className="text-secondary fs-4"> احجز اونلاين او كلم &nbsp;<i className="fas fa-phone text-danger fs-5"></i>&nbsp; ١٦٦٧٦</p>
                        <p className="text-secondary fs-5">١٥٠٠٠ دكتور -٩٠٠٠ استاذ واستشاري - اكثر من ٤٠ تخصص</p>
                        <div className="btn-group float-start ms-5  mt-0 mb-0 d-none d-sm-none d-sm-none d-md-block "
                            role="group" aria-label="Button group with nested dropdown">
                            <div className="btn-group shadow-sm  bg-body rounded-3 mt-0" role="group">
                                <div className="dropdown">
                                    <button id="btnGroupDrop1" type="button"
                                        className="btn btn-dark dropdown-toggle fw-bold text-end "
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <p className="fw-light text-secondary ">انا ابحث عن دكتور</p>
                                        <span>
                                            <i className="fas fa-stethoscope fs-4 fw-light "></i>
                                            <span className="deptTitle">
                                                {selectedDpts == '' ? (lang == 'en' ? 'اختار التخصص ' : 'Choose specialty') : selectedDpts}
                                            </span>
                                        </span>
                                    </button>
                                    <ul className={`dropdown-menu ${style.deptMenu}`}
                                        aria-labelledby="dropdownMenuButton1">
                                        <div className={style.ulContainer}>
                                            <div className="right">
                                                <span>
                                                    <li className='mx-2' disabled id="sItem">
                                                        {lang == 'en' ? 'الاكثر اختيارا' : 'Most popular '}
                                                    </li>
                                                </span>
                                                {
                                                    depts.commonDpts.map(el => (
                                                        <li key={el.name} onClick={(e) => setDpts(e)}>
                                                            <a className={`dropdown-item ${style.common}`}
                                                                href="#" style={{ 'color': '#0070cd' }}>
                                                                {lang == 'en' ? el.nameAR : el.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }

                                                {/* <!----awel part x el-t5sosat------> */}
                                            </div>
                                            <div className="left">
                                                <span>
                                                    <li className='mx-3' style={{ width: 'max-content' }}>
                                                        {lang == 'en' ? 'تخصصات اخري ' : 'Other specialties '}
                                                    </li>
                                                </span>
                                                {
                                                    depts.otherDpts.map(el => (
                                                        <li key={el.name} onClick={(e) => setDpts(e)}>
                                                            <a className={`dropdown-item ${style.common}`}
                                                                href="#" style={{ 'color': '#0070cd' }}>
                                                                {lang == 'en' ? el.nameAR : el.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                                {/* <!----awel part x el-t5sosat------> */}
                                            </div>
                                        </div>
                                        <div className={style.footer}>
                                            <button className={style.sliderBtn}
                                                onClick={(e) => prevDpts(e)}>
                                                <i className='fas fa-arrow-right mx-2'></i>
                                            </button>
                                            <span>{lang == 'en' ? 'صفحه' : 'Page '} {count}\3</span>
                                            <button className={style.sliderBtn}
                                                onClick={(e) => nextDpts(e)}>
                                                <i className='fas fa-arrow-left mx-2'></i>
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button id="btnGroupDrop1" type="button"
                                        className="btn btn-dark dropdown-toggle fw-bold text-end "
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <p className="fw-light text-secondary ">في محافظه</p>
                                        <span>
                                            <i className="fas fa-map-marker-alt fs-4 fw-light"></i>
                                            <span className="deptTitle">
                                                {selectedCity == '' ? (lang == 'en' ? ' اختار المحافظة' : 'Choose city ') : selectedCity}
                                            </span>
                                        </span>
                                    </button>
                                    <ul className={`dropdown-menu ${style.deptMenu2}`}
                                        aria-labelledby="dropdownMenuButton1">
                                        <div className={style.ulContainer} id="cities">
                                            <div className="right">
                                                <span>
                                                    <li className='mx-3' id='sItem'>
                                                        {lang == 'en' ? ' الاكثر اختيارا' : 'Most Popular '}
                                                    </li>
                                                </span>
                                                {
                                                    cities.commonCities.map(el => (
                                                        <li key={el.id} onClick={(e, id) => setCity(e, el.id)}>
                                                            <a className={`dropdown-item ${style.common}`}
                                                                href="#" style={{ 'color': '#0070cd' }}>
                                                                {lang == 'en' ? el.nameAR : el.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                                {/* here */}
                                            </div>
                                            <div className="left">
                                                <span>
                                                    <li style={{ width: 'max-content' }} className="mx-3">
                                                        {lang == 'en' ? 'محافظات اخري' : 'Other cities '}
                                                    </li>
                                                </span>
                                                {
                                                    cities.otherCities.map(el => (
                                                        <li key={el.name} onClick={(e, id) => setCity(e, el.id)}>
                                                            <a className={`dropdown-item ${style.common}`}
                                                                href="#" style={{ 'color': '#0070cd' }}>
                                                                {lang == 'en' ? el.nameAR : el.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button id="btnGroupDrop1" type="button"
                                        className="btn btn-dark dropdown-toggle fw-bold text-end "
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <p className="fw-light text-secondary ">في منطقه</p>
                                        <span>
                                            <i className="fas fa-map-marker-alt fs-4 fw-light"></i>
                                            <span className="deptTitle">
                                                {selectedArea == '' ? (lang == 'en' ? 'اختار المنطقة ' : 'Choose area') : selectedArea}
                                            </span>                                            </span>
                                    </button>
                                    <ul className={`dropdown-menu ${style.deptMenu}`}
                                        aria-labelledby="dropdownMenuButton1">
                                        <div className={style.ulContainer} id="areas">
                                            <div className="right">
                                                {lang == 'en' ? (
                                                    areas && areas.areasAR &&
                                                    areas.areasAR.map(el => (
                                                        <li key={el} onClick={(e) => setArea(e)}>
                                                            <a className={`dropdown-item ${style.common}`}
                                                                href="#" style={{ 'color': '#0070cd' }}>
                                                                {el}
                                                            </a>
                                                        </li>
                                                    ))
                                                ) : (
                                                    areas && areas.areas &&
                                                    areas.areas.map(el => (
                                                        <li key={el} onClick={(e) => setArea(e)}>
                                                            <a className={`dropdown-item ${style.common}`}
                                                                href="#" style={{ 'color': '#0070cd' }}>
                                                                {el}
                                                            </a>
                                                        </li>
                                                    ))
                                                )}

                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                {/* <div  className="dropdown">
                                        <button id="btnGroupDrop1" type="button"
                                            className="btn btn-dark dropdown-toggle fw-bold text-end "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <p className="fw-light text-secondary ">انا مشترك في تامين</p>
                                            <span>
                                                <i className="fas fa-stethoscope fs-4 fw-light "></i>
                                                <span className="fw-normal fs-5">اختار التامين</span>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu deptMenu" aria-labelledby="btnGroupDrop1">
                                            <div className="ulContainer">
                                                <div className="right t1">
                                                    <li>
                                                        الاكثر اختيارا
                                                    </li>
                                                   
                                                </div>
                                                <div className="left t2">
                                                    <li>
                                                        تخصصات اخري
                                                    </li>
                                                    
                                                </div>
                                            </div>
                                            
                                        </ul>
                                    </div> */}
                                {/* <div className="ms-5 me-5">
                                        new teaxt area
                                    </div> */}
                                <div className=" text-primary ms-3  fw-bold text-end "
                                >
                                    <p className="fw-light text-secondary ">او اكتب اسم</p>
                                    {/* <span> */}
                                    {/* <span className="fw-normal fs-5">اسم الدكتور</span> */}
                                    {/* <h3> */}
                                    <i className="fas fa-user-md"></i>
                                    {/* <span> الدكتور او المستشفى</span> */}
                                    <input type="text" placeholder={lang == 'en' ? 'الدكتور او المستشفي' :
                                        'Doctor name or hospital'}
                                        className={style.docInp} value={selectedDoctor}
                                        onChange={(e) => setDoctorName(e)} />
                                    {/* </h3>
                                            </span> */}
                                </div>


                                <button type="button" className="btn btn-danger fw-bold " id="search" onClick={goToDoctorPage}>
                                    <p className="fs-3"> ابحث</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default DocHeader