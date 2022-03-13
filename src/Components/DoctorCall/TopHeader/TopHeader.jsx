import './Topheader.css'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {getDepts} from '../../../ReactRedux/Actions/DeparmentsAction';
// import {getAllDepts} from '../../../ReactRedux/Actions/DeptsActionRedux'
import {getCommonDept, getDepts, getOtherDept} from '../../../ReactRedux/Actions/DeparmentsAction';
import style from './../../home/tabToggle/bigTab.module.css';
import {useHistory} from 'react-router-dom'
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import { useTranslation } from "react-i18next";

const TopHeader=()=>{
  const dispatch = useDispatch();
  const depts = useSelector((state) => state.deptReducer);
  const [count, setCount] = useState(1);
  const [selectedDpts, setSelectedDpts] = useState('');

  //for localizrion
  const {lang, setLang} = useContext(langContext);

  useEffect(() => {
    //da ll depts
    dispatch(getDepts());
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
const { t } = useTranslation();

return(
    <>
      <div className="col-12">
      <div className="img-fluid"  id="img11" >
      <p  className="text-secondary fs-3 fw-bold">{t('Book_Call')}</p>
      <div className="alert alert-primary position-fixed fw-bold fs-5 rounded-3" role="alert" id="alert">
      {t('alert')}
      </div>
      <p className="text-secondary fs-4">{t('Book_online')}  &nbsp;<i className="fas fa-phone text-danger fs-5"></i>&nbsp; {t('No')}</p>
      <div className="btn-group float-start ms-5  mt-0 d-none d-sm-none d-sm-none d-md-block" role="group" aria-label="Button group with nested dropdown" >                
        <div className="btn-group shadow-sm  bg-body rounded-3 " role="group">
          <div>
          <button id="btnGroupDrop7" type="button" className="btn btn-dark dropdown-toggle fw-bold text-end " data-bs-toggle="dropdown" aria-expanded="false">
            <p className="fw-light text-secondary "> {lang=='en'? 'انا ابحث عن دكتور' : 'Select a specialty '}</p>
            <span>
                <i className="fas fa-stethoscope fs-4 fw-light "></i>
                <span className="deptTitle">
                        {selectedDpts==''?  (lang=='en'? 'اختار التخصص ' : 'Choose specialty') : selectedDpts}
                        </span>
              </span>
          </button>
          <ul className={`dropdown-menu ${style.deptMenu}`}
                aria-labelledby="dropdownMenuButton1">
                    <div className={style.ulContainer}>
                        <div className="right">
                            <span>
                                <li className='mx-2' disabled id="sItem">
                                    {lang=='en'? 'الاكثر اختيارا' : 'Most popular '}
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
                            {lang=='en'? 'تخصصات اخري ' : 'Other specialties '}
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
                    <div className={style.footer}>
                        <button className={style.sliderBtn}
                        onClick={(e) => prevDpts(e)}>
                            <i className='fas fa-arrow-right mx-2'></i>
                        </button>
                        <span>{lang=='en'? 'صفحه' : 'Page '} {count}\3</span>
                        <button className={style.sliderBtn} 
                        onClick={(e) => nextDpts(e)}>
                            <i className='fas fa-arrow-left mx-2'></i>
                        </button>
                    </div>
                </ul>
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
         
        </div>
         <button type="button" className="btn btn-danger fw-bold " id="search"><p className="fs-3"> {lang=='en'? 'ابحث ' :'Search'}</p></button>
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