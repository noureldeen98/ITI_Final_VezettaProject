import NavbarComponent from './../home/header/NavbarComponent'
import FirstCardReserve from './FirstCardReserve'
import SecCardReserve from './SecCardReserve'
import '../DoctorCall/DoctorPartMerge/DoctorpartMerge.css'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import{getSpecificDoc} from '../../ReactRedux/Actions/DoctorCallAction'
import { useTranslation } from "react-i18next";

const Reservation=()=>{

    const AppDoc = localStorage.getItem('AppDoc')
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const doctor = useSelector((state) => state.getDoctors);
    useEffect(() =>{
        dispatch( getSpecificDoc(AppDoc,false))
        console.log(doctor.getSpecificDoc)
    },[])

    return(
        <>
        <NavbarComponent />
        <div className='row second mt-0'>
            <div className='col'>
            <FirstCardReserve doc={doctor.specificDoc}/>
           </div>
           <div className='col'>
           <SecCardReserve />
           </div>
           <div className="d-flex justify-content-center">
           <span className='text-secondary'>{t('Thank_Vezeeta')}</span>
           </div>
           <div className="d-flex justify-content-center">
           <span className='text-secondary'>{t('Resevive_ASk')} &nbsp;<i className="fas fa-phone text-danger fs-6"></i>&nbsp;  {t('No')}</span>
           </div>
        </div>
       
        </>
    )



}

export default Reservation;