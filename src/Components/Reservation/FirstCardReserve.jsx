import './FirstCardReservStyle.css'


const FirstCardReserve=()=>{

    return(
        <>
         <div className="shadow-sm mb-5 bg-body rounded-3 m-4  d-block" id="cardR">
                        <div className="row mt-0" id="resrveImg">
                         <h4  id="resreveTxt">لقد تم حجز ميعادك بنجاح</h4>
                        </div>
                        <div className="card-text row pb-4">
                        <div className='d-flex justify-content-start mb-2'>
                        <span><i className="fas fa-envelope text-primary border-bottom border-danger border-2 fs-4  me-3 pb-1 mb-3"></i></span>
                        <span  className='text-secondary me-5'>أبلغنا دكتور بحجزك</span>
                        </div>
                         <div className='d-flex justify-content-start mb-2'>
                        <span><i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger border-2 fs-4  me-3 pb-1 mb-3"></i></span>
                        <span  className='text-secondary me-5'>سعر الكشف  : 250 جنيه</span>
                        </div>
                        <hr/>
                        <div className='d-flex justify-content-start mb-2'>
                       <span><i className="fas fa-phone text-primary border-bottom border-danger border-2 fs-4  me-3 pb-1 mb-3 "></i></span> 
                       <span  className='text-secondary me-5'>رقم تليفون العيادة : 12345678</span>
                       </div>
                       <div className='d-flex justify-content-start mb-2'>
                       <span><i className="far fa-calendar-alt text-primary border-bottom border-danger border-2 fs-4  me-3 pb-1 mb-3"></i></span> 
                       <span  className='text-secondary me-5'>تفاصيل الحجز</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3'> اسم المريض</span> 
                       <span  className='text-secondary me-5'>تفاصيل الحجز</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3'> تاريخ الحجز</span> 
                       <span  className='text-secondary me-5'> تفاصيل الحجز الدخول بميعاد محدد</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3'> اسم الدكتور</span> 
                       <span  className='text-secondary me-5'>تفاصيل الحجز</span>
                       </div>
                       <hr/>
                       <div className='d-flex justify-content-start mb-2'>
                       <span className='text-secondary me-3'> عنوان العيادة</span> 
                       <span  className='text-secondary me-5'>تفاصيل الحجز</span>
                       </div>
                       <hr/>
                       <button type="button" className="btn btn-primary btn-lg  col-3 mx-auto ">مواعيدي</button>
                           </div>
                          
                      </div>
        </>
    )
}

export default FirstCardReserve;