import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDepts} from '../../../ReactRedux/Actions/DeparmentsAction';
import {getAllDepts} from '../../../ReactRedux/Actions/DeptsActionRedux'
import {getAllCities} from '../../../ReactRedux/Actions/CitiesActionRedux';
import {getAllAreas} from '../../../ReactRedux/Actions/AreasActionRedux'
import style from './bigTab.module.css';
export default function BigTab() {
    // tab-pane fade in active 
    const dispatch = useDispatch();
    // const depts = useSelector((state) => state.deptRed);
    //normal redux
    const dpts = useSelector(state => state.dptReduxReducer.depts);
    const [allDepts, setAllDepts] = useState([dpts]);
    const [commonDepts, setCommonDepts] = useState([]);
    const [otherDepts, setOtherDepts] = useState([]);
    const [counter, setCounter] = useState(1);
    const getCommonDpts = () => {
        allDepts.map(dpt => {
            if(dpt.common) {
                setCommonDepts(oldArr => [...oldArr, dpt]);
                // if(counter == 1) {
                //     setCommonDepts(oldArr => oldArr.slice(0,9))
                // };
                // if(counter == 2) {
                //     setCommonDepts(oldArr => oldArr.slice(10,19))
                // }
                // if(counter == 3) {
                //     setCommonDepts(oldArr => oldArr.slice(20,commonDepts.length-1))
                // }
                
            }
        })
    }
    const getOtherDpts = () => {
        allDepts.map(dpt => {
            if(dpt.other) {
                setOtherDepts(oldArr => [...oldArr, dpt]);
            }
        })
    }
    //cities
    const cities = useSelector(state => state.citiesReduxReducer.cities);
    const [allCities, setAllCities] = useState([cities]);
    const [commonCities, setCommonCities] = useState([]);
    const [otherCities, setOtherCities] = useState([]);
    const getCommonCities = () => {
        allCities.map(city => {
            if(city.common) {
                setCommonCities(oldArr => [...oldArr, city]);
            }
        })
    }
    const getOtherCities = () => {
        allCities.map(city => {
            if(city.other) {
                setOtherCities(oldArr => [...oldArr, city]);
            }
        })
    }

    //areas
    const areas = useSelector(state => state.areasReduxReducer.areas);
    const [allAreas, setAllAreas] = useState([areas]);
    const [commonAreas, setCommonAreas] = useState([]);
    const [otherAreas, setOtherAreas] = useState([]);
    const getCommonAreas = () => {
        allAreas.map(area => {
            if(area.common) {
                setCommonAreas(oldArr => [...oldArr, area]);
            }
        })
    }
    const getOtherAreas = () => {
        allAreas.map(area => {
            if(area.other) {
                setOtherAreas(oldArr => [...oldArr, area]);
            }
        })
    }
    //useEfect
    useEffect(() => {
        // dispatch(getDepts());
        dispatch(getAllDepts());
        setAllDepts(oldDept => oldDept[0]);
        //cities
        dispatch(getAllCities());
        setAllCities(oldArr => oldArr[0]);
        //Areas
        dispatch(getAllAreas());
        setAllAreas(oldArr => oldArr[0]);
    }, []);
    //deots
    useEffect(() => {
        getCommonDpts();
        getOtherDpts();
    }, [allDepts])
    //cities
    useEffect(() => {
        getCommonCities();
        getOtherCities();
    }, [allCities])
    //areas
    useEffect(() => {
        getCommonAreas();
        getOtherAreas();
    }, [allAreas])
    // 0-9 ==== 10-18 === 19-length
    const nextDept = () => {
        if(counter == 3) {
            setCounter(counter);
        }
        else {
            setCounter(++counter)
        }
    }

    return <>
        <div className={`d-flex align-items-center
                    ${style.reserveID}`} id={style.reserve}>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                aria-expanded="false">
                    <h5>انا ابحث عن دكتور</h5>
                    <h3>
                        <i className="fas fa-stethoscope"></i>
                        <span className="deptTitle">اختار التخصص</span>
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer}>
                        <div className="right">
                            <span>
                                <li>
                                    الاكثر اختيارا
                                </li>
                            </span>
                            {commonDepts.slice(0,9).map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el.name} 
                                </a>
                            </li>
                            ))}
                            {/* <!----awel part x el-t5sosat------> */}
                        </div>
                        <div className="left">
                            <span>
                            <li>
                                تخصصات اخري
                            </li>
                        </span>
                        {otherDepts.slice(0,9).map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el.name} 
                                </a>
                            </li>
                            ))}
                            {/* <!----awel part x el-t5sosat------> */}
                        </div>
                    </div>
                    {/* <div className="footer" 
                    style="padding: 0em 2em; ">
                        <p>صفحة 1\3</p>
                    </div> */}
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                    <h5>في محافظة</h5>
                    <h3>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="deptTitle">اختار المحافظة</span>
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu2}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer} id="cities">
                        <div className="right">
                            <span>
                                <li>
                                    الاكثر اختيارا
                                </li>
                            </span>
                            {commonCities.map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el.name} 
                                </a>
                            </li>
                            ))}
                            {/* here */}
                        </div>
                        <div className="left">
                            <span>
                                <li>
                                    محاففظات اخري
                                </li>
                            </span>
                            {/* here */}
                            {otherCities.map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el.name} 
                                </a>
                            </li>
                            ))}
                        </div>
                    </div>
                    {/* <!-- <div className="footer" style="padding: 0em 2em; ">
                        <p>صفحة 1\2</p>
                    </div> --> */}
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn dropdown-toggle" 
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <h5>في منطقة</h5>
                    <h3>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="deptTitle">اختار المنطقة</span>
                        {/* <!--here--> */}
                    </h3>
                </button>
                <ul className={`dropdown-menu ${style.deptMenu}`} 
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer} id="areas">
                        <div className="right">
                            <span>
                                <li id="commonAreas" style={{"display": "block"}}>
                                    الاكثر اختيارا
                                </li>
                            </span>
                            {/* <span id="commonSpan">

                            </span> */}
                            {commonAreas.map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el.name} 
                                </a>
                            </li>
                            ))}
                        </div>
                        <div className="left">
                            <span>
                                <li id="otherAreas" style={{"display": "block"}}>
                                    مناطق اخري
                                </li>
                            </span>
                            {otherAreas.map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd'}}>
                                    {el.name} 
                                </a>
                            </li>
                            ))}
                            {/* <span id='otherSpan'>
                            </span> */}
                        </div>
                    </div>
                    {/* <!-- <div className="footer" style="padding: 0em 2em; ">
                        <p>صفحة 1\2</p>
                    </div> --> */}
                </ul>
            </div>
            <div className={style.doc}>
                <h5>او اكتب اسم الدكتور</h5>
                <h3>
                    <i className="fas fa-user-md"></i>
                    <span> الدكتور او المستشفى</span>
                </h3>
            </div>
            <div className=" bg-danger text-light" style={{"alignSelf": "stretch", "borderRadius":"10px" }}>
                <h3 style={{"textAlign": "center",
                "padding": "1em"}}>
                    <i className="fas fa-search"></i>
                    <span> ابحث</span>
                </h3>
            </div>
        </div>
    </>
}
