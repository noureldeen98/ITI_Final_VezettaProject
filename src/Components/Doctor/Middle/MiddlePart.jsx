import AsideBooking from './../AsideBooking/AsideBooking'
import DctorInfo from './../DctorInfo/DctorInfo'
import './middlePartStyle.css'
import { useParams  , useLocation} from "react-router-dom";
import { useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import{getSpecificDoc} from '../../../ReactRedux/Actions/DoctorCallAction'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';

const  MiddlePart=()=>{
  
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.getDoctors);
  const loader = useSelector((state) => state.loader.loader);
  const params=useParams();
  const location = useLocation();
  // console.log(location.state.fromCovid)
  console.log(params.name)
   useEffect(() =>{
     if(location.state.fromCovid===true)
     {
       dispatch( getSpecificDoc(params.name,true))
      }
      else{
        dispatch( getSpecificDoc(params.name,false))
      }
    console.log(doctor.specificDoc)
    
    //  doc=doctor.specificDoc
    // console.log(doc)
    
 
  } ,[params.name] )
  
  const { t } = useTranslation();
  const {lang, setLang} = useContext(langContext);

return(
    <>
    
    {/* {doctor.length>0? */}
     <div className="row second mt-0" style={{"margin":"0"}}>
        <nav aria-label="breadcrumb" id="brcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item mt-2 me-5 ms-1"><Link to="/home" className="text-decoration-none">  {t('Vezeeta')}</Link></li>
            <li className="breadcrumb-item active mt-2" aria-current="page">  {t('doc')} {lang=='en'? doctor.specificDoc.nameInArabic : doctor.specificDoc.Name}</li>
          </ol>
        </nav>
        {/* {loader && (
        <div className="d-flex justify-content-center mt-0">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )} */}
    <DctorInfo info={doctor.specificDoc} />
    
    <AsideBooking mony={doctor.specificDoc}/>
    
    </div>
      {/* :
    <p>pending</p>}  */}
    </>
  )


   }

export default MiddlePart