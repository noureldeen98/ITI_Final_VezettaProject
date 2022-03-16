import './DoctorpartMerge.css'
import DoctorCards from '../DoctorCards/DoctorCards';
import AsideFilter from './../AsideFilter/AsideFilter'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DoctorPartMerge=()=>{

  const { t } = useTranslation();

return(

    <>
    <div className="row second " style={{"margin":"0"}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item mt-2 me-5 ms-1"><Link to="/home"className="text-decoration-none">{t('Vezeeta')}</Link></li>
          <li className="breadcrumb-item active mt-2" aria-current="page"> {t('Telehealth_in_Egypt')}</li>
        </ol>
      </nav>
      </div>
      
    <div className='row' style={{'backgroundColor':'#e2e6ea'}}>
       <AsideFilter/>
      <DoctorCards />
    </div>
    </>
)


}

export default DoctorPartMerge;