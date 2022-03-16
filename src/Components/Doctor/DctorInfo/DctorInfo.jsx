import { useState ,useEffect} from "react";
import {storage} from '../../../FireBaseConfiguration/FirebaseConfiguration'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {useDispatch, useSelector} from 'react-redux';
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';

const DctorInfo=(c)=>{

//  let [getDocInfo]=useState(c.info)
  let getDocInfo=c.info
//const[img,setImg]=useState()
const loader = useSelector((state) => state.loader.loader);
const {lang, setLang} = useContext(langContext);

 // const storageRef = ref(storage, `DoctorCall/${getDocInfo.Image}.jpg`);

    // getDownloadURL(storageRef)
    // .then((url) => {
    //   console.log(url)
    //    setImg(url)
     
    // })
    // .catch((error) => {
    //   console.log(error)})

  const { t } = useTranslation();

    return(
        <>
         {/* {loader && (
        <div className="d-flex justify-content-center mt-0">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )} */}
       <div className="col-md-7   " >
          <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4  d-block " >
            <div className="row">
            <div className="col-2 ">
            <img id="img" className="card-img rounded   rounded-circle   me-2  " alt="imge" src={getDocInfo.Image} />
            </div>
                <div className="card-text col-lg-9 col-md-9 col-sm-9 me-4">
                  <span className="text-secondary fs-2 fw-light " id="dName"><span>{t('doc')} </span> {lang=='en'? getDocInfo.nameInArabic : getDocInfo.Name} </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i><span className="text-secondary me-5">{t('view')}</span>
                  <p className="pt-5" id="depart">{lang=='en'? getDocInfo.departmentInArabic : getDocInfo.Department} </p>
                  <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                  <span className="p-4 text-secondary">{t('Overall_Rating_From')} <span id="dRate">{getDocInfo.Rate}</span> {t('Visitors')}  
                   {t('Show_Review')}</span> 
                  <br/><br/>
                  <span className="border border-secondary p-1 rounded-3 text-secondary"><i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i> {t('Promo_code')}</span> <br/><br/>
                  <div className="card " style={{"backgroundColor": "#f5f5f5", "borderRadius":"15px 0 15px 0"}}>
                    <div className="card-body">
                  <p className=" text-secondary">شكراً جداً أسلوب راقى وتعامل ممتاز</p>
                  <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                  </div>
                </div>
              </div>
                </div>
              </div>

          <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4 overflow-hidden d-block" >
            <div className="row">
                <p className="fs-4 text-secondary fw-bold"><i className="fas fa-exclamation border-bottom border-danger text-primary pb-2 fs-3 me-2 ms-3"></i>{t('Doc_Info')}</p>
                <p className=" text-secondary fw-light" id="dInfo">{lang=='en'? getDocInfo.InformationInArabic : getDocInfo.Information}</p>
                </div>
              </div>

          <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4 overflow-hidden d-block" >
            <div className="row">
                <p className="fs-4 text-secondary fw-bold"><i className="fas fa-star-half-alt border-bottom border-danger text-primary pb-2 fs-3 me-2 ms-3"></i>{t('Patients_Reviews')}:</p>
               <span className=" text-center"> <i className="fas fa-star text-warning fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i></span>
              <p className=" text-center text-secondary">{t('Overall_rate')}</p>  
              <p className=" text-center text-secondary"> {t('From')} <span id="dRate2">{getDocInfo.Rate}</span> {t('Visitors')}</p>
              <div className="col-4 me-4">
              <span><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star-half-alt text-warning me-2"></i></span>
              <p>{t('Assistant_Rating')}</p>
              </div>
              <div className="col-4">
              <span><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="far fa-star text-warning me-2"></i></span>
              <p>{t('Clinic_Rating')}</p>
              </div>
              <div className="col-3">
              <span className="badge bg-primary p-2">5 / 5</span>  
              <p>{t('Doctor_Rating')}</p>
             </div>
            </div>
              </div>
          </div>
        </>
    )
}

export default DctorInfo