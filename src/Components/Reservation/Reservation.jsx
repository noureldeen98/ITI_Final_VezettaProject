import NavbarComponent from './../home/header/NavbarComponent'
import FirstCardReserve from './FirstCardReserve'
import SecCardReserve from './SecCardReserve'
import '../DoctorCall/DoctorPartMerge/DoctorpartMerge.css'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import{getSpecificDoc} from '../../ReactRedux/Actions/DoctorCallAction'

const Reservation=()=>{

    const AppDoc = localStorage.getItem('AppDoc')
    const dispatch = useDispatch();
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
           <span className='text-secondary'>شكراً لاستخدامك فيزيتا ,نتمنى لك دوام الصحة</span>
           </div>
           <div className="d-flex justify-content-center">
           <span className='text-secondary'>يسعدنا تلقي استفساراتكم على &nbsp;<i className="fas fa-phone text-danger fs-6"></i>&nbsp;  16676</span>
           </div>
        </div>
       
        </>
    )



}

export default Reservation;