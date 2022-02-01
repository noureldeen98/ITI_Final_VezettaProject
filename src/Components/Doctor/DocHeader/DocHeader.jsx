import './docHeaderStyle.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllDepts} from '../../../ReactRedux/Actions/DeptsActionRedux'
import {getAllCities} from '../../../ReactRedux/Actions/CitiesActionRedux';
import {getAllAreas} from '../../../ReactRedux/Actions/AreasActionRedux'
import style from './../../home/tabToggle/bigTab.module.css'

const DocHeader=()=>{
    
    const dispatch = useDispatch();
    // const depts = useSelector((state) => state.deptRed);
    //normal redux
    const dpts = useSelector(state => state.dptReduxReducer.depts);
    const [allDepts, setAllDepts] = useState([dpts]);
    // const allDepts = [dpts]
    const [commonDepts, setCommonDepts] = useState([]);
    const [otherDepts, setOtherDepts] = useState([]);
    const [counter, setCounter] = useState(1);
    const getCommonDpts = () => {
        allDepts.map(dpt => {
            if( dpt && dpt.common) {
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
            if( dpt && dpt.other) {
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
            if(city && city.common) {
                setCommonCities(oldArr => [...oldArr, city]);
            }
        })
    }
    const getOtherCities = () => {
        allCities.map(city => {
            if(city && city.other) {
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
            if(area && area.common) {
                setCommonAreas(oldArr => [...oldArr, area]);
            }
        })
    }
    const getOtherAreas = () => {
        allAreas.map(area => {
            if(area && area.other) {
                setOtherAreas(oldArr => [...oldArr, area]);
            }
        })
    }
    //useEfect
    useEffect(() => {
        // dispatch(getDepts());
        dispatch(getAllDepts());
        setAllDepts(oldDept => oldDept[0]);
        // setAllDepts(dpts)
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

return(
    <>
    <div className="row">
        <div className="col-12">
      <div className="img-fluid"  id="img1" >
      <p  className="text-secondary fs-4 fw-bold">احجز الآن مع دكتورة أمال صبري</p>
      <p className="text-secondary fs-4"> احجز اونلاين او كلم &nbsp;<i className="fas fa-phone text-danger fs-5"></i>&nbsp; ١٦٦٧٦</p>
      <p className="text-secondary fs-5">١٥٠٠٠ دكتور -٩٠٠٠ استاذ واستشاري - اكثر من ٤٠ تخصص</p>     
  <div className="btn-group float-start ms-5  mt-1 d-none d-sm-none d-sm-none d-md-block "
                                role="group" aria-label="Button group with nested dropdown">
                                <div className="btn-group shadow-sm  bg-body rounded-3" role="group">
                                    <div className="dropdown">
                                        <button id="btnGroupDrop1" type="button"
                                            className="btn btn-dark dropdown-toggle fw-bold text-end "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <p className="fw-light text-secondary ">انا ابحث عن دكتور</p>
                                            <span>
                                                <i className="fas fa-stethoscope fs-4 fw-light "></i>
                                                <span className="fw-normal fs-5 deptTitle">اختار التخصص</span>
                                            </span>
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
                                        <button id="btnGroupDrop1" type="button"
                                            className="btn btn-dark dropdown-toggle fw-bold text-end "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <p className="fw-light text-secondary ">في محافظه</p>
                                            <span>
                                                <i className="fas fa-map-marker-alt fs-4 fw-light"></i>
                                                <span className="fw-normal fs-5 deptTitle" >اختار المحافظه</span>
                                            </span>
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
                                        <button id="btnGroupDrop1" type="button"
                                            className="btn btn-dark dropdown-toggle fw-bold text-end "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <p className="fw-light text-secondary ">في منطقه</p>
                                            <span>
                                                <i className="fas fa-map-marker-alt fs-4 fw-light"></i>
                                                <span className="fw-normal fs-5 deptTitle" >اختار المنطقة</span>
                                            </span>
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
                                    <div  className="dropdown">
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
                                    </div>
                                    <div>
                                        <div className="bg-light text-primary ms-3  fw-bold text-end "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <p className="fw-light text-secondary ">او اكتب اسم</p>
                                            <span>
                                                <i className="fas fa-stethoscope fs-4 fw-light "></i>
                                                <span className="fw-normal fs-5">اسم الدكتور</span>
                                            </span>
                                          </div>
                                        
                                    </div>
                                    <button type="button" className="btn btn-danger fw-bold " id="search">
                                        <p className="fs-3"><i className="fas fa-search fs-3"></i> ابحث</p>
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