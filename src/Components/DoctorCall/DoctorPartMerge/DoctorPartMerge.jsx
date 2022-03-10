import './DoctorpartMerge.css'
import DoctorCards from '../DoctorCards/DoctorCards';
import AsideFilter from './../AsideFilter/AsideFilter'
import { useState, useEffect } from "react";

const DoctorPartMerge=()=>{

return(

    <>
    <div className="row second " style={{"margin":"0"}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item mt-2 me-5 ms-1"><a href="#" className="text-decoration-none">فيزيتا</a></li>
          <li className="breadcrumb-item active mt-2" aria-current="page">استشارة هاتفية فى مصر</li>
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