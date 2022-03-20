import{getAllDoctorAction,filterDoctor,clearDoctor} from '../../../ReactRedux/Actions/DoctorCallAction'
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {storage} from '../../../FireBaseConfiguration/FirebaseConfiguration'
import { ref, getDownloadURL } from "firebase/storage";
import './DoctorCards.css'
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
    
const DoctorCards=(props)=>{
  
  const location = useLocation();
//  console.log(location.search)
  const value=queryString.parse(location.search);
  // console.log(value)
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.getDoctors);
   const loader = useSelector((state) => state.loader.loader);

  useEffect(() =>{
    if(location.search=='')
    {
      dispatch(getAllDoctorAction())
    }
    else{
      dispatch(filterDoctor(value.dpt,value.city,value.area,value.doc))
    }

    console.log(doctors)


    return () => {
      dispatch(clearDoctor());
    };

   } ,[] );
   const { t } = useTranslation();
   const {lang, setLang} = useContext(langContext);

    return(
        <>

       
        <div className="col-md-9 overflow-hidden col-sm-11 align-self-center name" >
        <span className="fs-4 text-secondary fw-bold"> {t('All_Specialities')} </span>
       <span className="fs-5 text-secondary fw-light">	&nbsp; {t('Doctor')}</span>
       <div className="fs-4 text-secondary fw-light float-start "> {t('Sorting')}:
       <div className="dropdown float-start me-3 px-4">
        <button className="btn btn-light dropdown-toggle  text-secondary  px-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {t('Best_Match')}
        </button>
        <ul className="dropdown-menu  p-3" aria-labelledby="dropdownMenuButton1">
          <div className="form-check py-2 ">
            <input className="form-check-input float-end ms-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault1">
              &nbsp;{t('Best_Match')}	&nbsp;
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault2">
            {t('Top_Rated')}
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2  " type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault5">
            {t('Price_Low_High')}
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2  " type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
            <label className="form-check-label text-secondary " forhtml="flexRadioDefault6">
            {t('Price_High_Low')}
            </label>
          </div>
        </ul>
      </div>
    </div>
    <br/>
    {loader && (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <br/>

    {doctors.doctor.map((doc,index) => {
                    console.log(doc.timeTables)
                  let cash=doc.Price;
                   return (
                    <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4  d-block " key={index}>
                    <div className="row justify-content-center">
                        <div className="col-2">
                          {/* <img src={files[index]} className="card-img rounded   rounded-circle  mt-5 me-2 " alt="imge" /> */}
                         <img src={doc.Image} className="card-img rounded   rounded-circle  mt-5 me-2 " alt="imge" />
                        </div>
                        <div className="card-text col-lg-5 col-md-9 col-sm-8 me-4 overflow-hidden align-self-center">
                          {/* <span className="text-primary fs-5 overflow-hidden">دكتور  <Link to={`/MergeDoctor/${doc.Name}`}className="fs-3 text-decoration-none"> {doc.Name} </Link> </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i> */}
                          <span className="text-primary fs-5 overflow-hidden">{t('doc')}  <Link to={{pathname:`/MergeDoctor/${doc.Name}`, state: { fromCovid: false}}}className="fs-3 text-decoration-none"> {lang=='en'? doc.nameInArabic : doc.Name} </Link> </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i>
                          <p>{lang=='en'? doc.departmentInArabic : doc.Department}  </p>
                          <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                          <p>{t('Overall_Rating_From')} {doc.Rate} {t('Visitors')} </p>
                          <i className="fas fa-stethoscope border-bottom border-danger  pb-2 m-2 text-primary"></i>
                          <span>{lang=='en'? doc.titleInArabic : doc.Title} </span><br/><br/>
                          <i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i>
                          <span> {t('Price',{cash} )}   </span>
                          <span className="border border-secondary ms-2 p-1 rounded-3 text-secondary"><i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i> {t('Promo_code')}  </span><br/><br/>
                          <i className="fas fa-phone-alt text-primary border-bottom border-danger me-2 ms-3 pb-1 fs-5"></i>
                          <span>{t('No')} - {t('Cost')}  </span>
                           </div>
                          <div className="col-lg-4  col-sm-6 d-none d-md-flex  flex-row bd-highlight mt-4 me-1 text-center overflow-hidden">
                          {doc.timeTables&&doc.timeTables.map((tm,indx)=>{
                            return(
                            <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}} key={indx}>                        
                              <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">{tm.day}</span>
                              <p>{tm.date}</p>
                              {tm.hours.map((h,i)=>{
                                // {h.status&&h.status=='empty'}
                                return(
                                  
                                  <span className="px-3 py-2 text-center" key={i}>{h.hour} {t('PM')}</span>
                                )
                              })}
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">{t('Book' )}</span>
                          </div>)
                          })   }
                            {/* <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                              <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">{t('Today' )}</span>
                              <span className="px-3 py-2 text-center">10:00 {t('PM')}</span>
                              <span className="px-3 py-2 text-center">10:30 {t('PM')}</span>
                              <span className="px-3 py-2 text-center">11:00 {t('PM')}</span>
                              <span className="px-3 py-2 text-center">{t('More' )}</span>
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">{t('Book' )}</span>
                          </div> */}
                            {/* <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center overflow-hidden" style={{"width": "250px"}}>
                              <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">{t('Sun' )} </span>
                              <span className="px-3 py-2 text-center">10:00 {t('PM')}</span>
                              <span className="px-3 py-2 text-center">10:30 {t('PM')}</span>
                              <span className="px-3 py-2 text-center">11:00 {t('PM')}</span>
                              <span className="px-3 py-2 text-center">{t('More' )}</span>
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">{t('Book' )}</span>
                          </div>
                            <div className="   bg-body mx-auto   px-2 d-flex flex-column text-center overflow-hidden" style={{"width": "250px"}}>
                                <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">{t('Tomorrow' )}</span>
                                <span className="px-3 py-2 text-center">10:00 {t('PM')}</span>
                                <span className="px-3 py-2 text-center">10:30 {t('PM')}</span>
                                <span className="px-3 py-2 text-center">11:00 {t('PM')}</span>
                                <span className="px-3 py-2 text-center">{t('More' )}</span>
                                <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">{t('Book' )}</span>
                            </div> */}
                           
                          </div> 
                          <p className="text-center ms-5">{t('Call' )}</p>
                      </div>
                      </div>
                      
                      )
                   })
                  }
        </div>
        </>
    )

}
export default DoctorCards;