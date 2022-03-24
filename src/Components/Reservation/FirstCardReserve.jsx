import './FirstCardReservStyle.css'
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'


const FirstCardReserve=(data)=>{

    let doctor=data.doc
    const AppDate = localStorage.getItem('AppDate')
    const AppDay = localStorage.getItem('AppDay')
    const AppHour = localStorage.getItem('AppHour')
    const AppDoc = localStorage.getItem('AppDoc')
    const UsrName = localStorage.getItem('Name')

  
   const { t } = useTranslation();

    return(
        <>
         <div className="shadow-sm mb-5 bg-body rounded-3 m-4  d-block" id="cardR">
                        <div className="row mt-0" id="resrveImg">
                         <h4  id="resreveTxt" className="ms-3">{t('Book_Appointment')}</h4>
                        </div>
                        <div className="card-text row pb-4">
                        <div className='d-flex justify-content-start mb-2'>
                        <span><i className="fas fa-envelope text-primary border-bottom border-danger border-2 fs-4 ms-3 me-3 pb-1 mb-3"></i></span>
                        <span  className='text-secondary me-5'>{t('Doc_Told')} {AppDoc} {t('book_you')}</span>
                        </div>
                         <div className='d-flex justify-content-start mb-2'>
                        <span><i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger ms-3 border-2 fs-4  me-3 pb-1 mb-3"></i></span>
                        <span  className='text-secondary me-5'>{t('Session_Price')}  :{doctor.Price} {t('Pound')}</span>
                        </div>
                        <hr/>
                        <div className='d-flex justify-content-start mb-2'>
                       <span><i className="fas fa-phone text-primary border-bottom border-danger border-2 fs-4 ms-3 me-3 pb-1 mb-3 "></i></span> 
                       <span  className='text-secondary me-5'>{t('Clinic_NO')} : {doctor.Clinic_Phone}</span>
                       </div>
                       <div className='d-flex justify-content-start mb-2'>
                       <span><i className="far fa-calendar-alt text-primary border-bottom border-danger border-2 ms-3 fs-4  me-3 pb-1 mb-3"></i></span> 
                       <span  className='text-secondary me-5'>{t('Booking_details')}</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3 ms-3'>{t('Patient_name')}</span> 
                       <span  className='text-secondary me-5'>{UsrName}</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3 ms-3'> {t('booking_date')}</span> 
                       <span  className='text-secondary me-5'>{AppDay}  {AppHour}  {AppDate}  {t('Clinic_NO')}</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3 ms-3'> {t('doctor_name')}</span> 
                       <span  className='text-secondary me-5'>{AppDoc}</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3 ms-3'> {t('Clinic_address')}</span> 
                       <span  className='text-secondary me-5'>{doctor.Clinic_Address}</span>
                       </div>
                       <hr/>
                       
                       <button type="button" className="btn btn-primary btn-lg  col-3 mx-auto"><Link className=" text-light" to="/app">{t('my_appointments')}</Link></button>
                       
                           </div>
                          
                      </div>
        </>
    )
}

export default FirstCardReserve;