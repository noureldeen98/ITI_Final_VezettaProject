
import { useState } from "react";
const AsideBooking=(prc)=>{
  let [cash]=useState(prc.mony)
  let docPrice=cash[0].Price
console.log(cash[0].Price)
return(
    <>
    <div className="col-md-4 me-4  "  id="money">
          <div className=" shadow-lg p-3 mb-5 bg-body rounded-3 m-4 mx-auto d-block sticky-lg-top  " >
            <p className="text-center text-light bg-primary rounded-top fs-4">معلومات الحجز</p>
            <div className="row">
              <div className="text-center">
             <p><i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger fs-3 "></i></p>
              <span>الكشف : {docPrice}<span id="dPrice"></span> جنيه</span>
                </div>
                <hr/>
                <p  className="text-center fs-4 fw-bold">احجز كشف عبر مكالمة</p>
                <div className=" d-flex  flex-row bd-highlight mt-4 me-1 mb-3">
                  <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                    <span className=" bg-primary text-light px-3 py-2 rounded-top">اليوم</span>
                    <span className="px-3 py-2">10:00 م</span>
                    <span className="px-3 py-2">10:30 م</span>
                    <span className="px-3 py-2">11:00 م</span>
                    <span className="px-3 py-2">المزيد</span>
                    <span className=" bg-danger text-light px-3 py-2 rounded-bottom">احجز</span>
                </div>
                  <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                    <span className=" bg-primary text-light px-3 py-2 rounded-top">الأحد 2\1</span>
                    <span className="px-3 py-2">10:00 م</span>
                    <span className="px-3 py-2">10:30 م</span>
                    <span className="px-3 py-2">11:00 م</span>
                    <span className="px-3 py-2">المزيد</span>
                    <span className=" bg-danger text-light px-3 py-2 rounded-bottom">احجز</span>
                </div>
                  <div className="   bg-body mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                      <span className=" bg-primary text-light px-3 py-2 rounded-top">غداً</span>
                      <span className="px-3 py-2">10:00 م</span>
                      <span className="px-3 py-2">10:30 م</span>
                      <span className="px-3 py-2">11:00 م</span>
                      <span className="px-3 py-2">المزيد</span>
                      <span className=" bg-danger text-light px-3 py-2 rounded-bottom">احجز</span>
                  </div>
                 
                </div> 
                <hr/>
                <p className="text-center text-secondary">الاتصال بميعاد محدد</p>
                <hr/>
                <p className="text-center text-secondary">هنوصلك بالدكتور في الميعاد اللي اخترته. من فضلك اتأكد ان تليفونك مفتوح في الميعاد المحدد</p>
                </div>
              </div>
        </div>
    </>
)

}

export default AsideBooking