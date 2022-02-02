import './Topheader.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDepts} from '../../../ReactRedux/Actions/DeparmentsAction';
import {getAllDepts} from '../../../ReactRedux/Actions/DeptsActionRedux'
import style from './../../home/tabToggle/bigTab.module.css';

const TopHeader=()=>{
  const dispatch = useDispatch();
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

  useEffect(() => {
    // dispatch(getDepts());
    dispatch(getAllDepts());
    setAllDepts(oldDept => oldDept[0]);
    // setAllDepts(dpts)
}, []);

 //deots
 useEffect(() => {
  getCommonDpts();
  getOtherDpts();
}, [allDepts])

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
      <div className="col-12">
      <div className="img-fluid"  id="img1" >
      <p  className="text-secondary fs-3 fw-bold">احجز مكالمة دكتور مع افضل دكاترة في مصر</p>
      <div className="alert alert-primary position-fixed fw-bold fs-5 rounded-3" role="alert" id="alert">
        الاستشارات الهاتفية للمتابعة فقط و ليست للكشف
      </div>
      <p className="text-secondary fs-4"> احجز اونلاين او كلم &nbsp;<i className="fas fa-phone text-danger fs-5"></i>&nbsp; ١٦٦٧٦</p>
      <div className="btn-group float-start ms-5  mt-0 d-none d-sm-none d-sm-none d-md-block" role="group" aria-label="Button group with nested dropdown" >                
        <div className="btn-group shadow-sm  bg-body rounded-3 " role="group">
          <div>
          <button id="btnGroupDrop7" type="button" className="btn btn-dark dropdown-toggle fw-bold text-end " data-bs-toggle="dropdown" aria-expanded="false">
            <p className="fw-light text-secondary ">انا ابحث عن دكتور</p>
            <span>
                <i className="fas fa-stethoscope fs-4 fw-light "></i>
                <span className="fw-normal fs-5">اختار التخصص</span>
              </span>
          </button>
          {/* <ul className="dropdown-menu " aria-labelledby="btnGroupDrop1">
            <div className="ulContainer">
              <div className="right">
                  <li>
                      الاكثر اختيارا
                  </li>
              </div>
              <div className="left">
                  <li>
                      تخصصات اخري
                  </li>
              </div>
              </div>
              <div className="footer" style={{"padding": "0em 2em "}}>
                  <p>صفحة 1\3</p>
              </div>
          </ul> */}
          <ul className={`dropdown-menu ${style.deptMenu}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer} style={{'width': '400px'}}>
                        <div className="right">
                            <span>
                                <li>
                                    الاكثر اختيارا
                                </li>
                            </span>
                            {commonDepts.slice(0,9).map(el => (
                                <li key={el.name}>
                                <a className={`dropdown-item ${style.common}`} 
                                href="#" style={{'color': '#0070cd','fontSize':'17px','width':'180px'}}>
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
                                href="#" style={{'color': '#0070cd','fontSize':'17px','width':'180px'}}>
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
         <button type="button" className="btn btn-danger fw-bold " id="search"><p className="fs-3"><i className="fas fa-search fs-3"></i> ابحث</p></button>
      </div>
    </div></div>
        </div>
    {/* <div className="row second " style={{"margin":"0"}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item mt-2 me-5 ms-1"><a href="#" className="text-decoration-none">فيزيتا</a></li>
          <li className="breadcrumb-item active mt-2" aria-current="page">استشارة هاتفية فى مصر</li>
        </ol>
      </nav>
      </div> */}
    </>
)

}

export default TopHeader