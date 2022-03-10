
import { useState } from "react";
const AsideBooking=(prc)=>{
  //let [cash]=useState(prc.mony)
  let cash=prc.mony
  // let docPrice=cash[0].Price
// console.log(cash)
return(
    <>
    <div className="col-md-5   overflow-hidden "  id="money">
          <div className=" shadow-lg p-3  mb-5 bg-body rounded-3 m-4  d-block sticky-lg-top  " >
            <p className="text-center text-light bg-primary rounded-top fs-4">معلومات الحجز</p>
            <div className="row ">
              <div className="text-center">
             <p className="text-center"><i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger fs-3 text-center"></i></p>
              <span>الكشف : {cash.Price}<span id="dPrice"></span> جنيه</span>
                </div>
                <hr/>
                <p  className="text-center fs-4 fw-bold">احجز كشف عبر مكالمة</p>
                <div className="d-flex  flex-row bd-highlight mt-4  mb-3 text-center ">
                  <div className="bg-body mx-auto d-flex flex-column text-center" style={{"width":"6em"}}>
                    <span className="bg-primary text-light px-5 py-2 rounded-top text-center">اليوم</span>
                    <span className="px-3 py-2 text-center">10:00 م</span>
                    <span className="px-3 py-2 text-center">10:30 م</span>
                    <span className="px-3 py-2 text-center">11:00 م</span>
                    <span className="px-3 py-2 text-center">المزيد</span>
                    <span className=" bg-danger text-light px-5 py-2 rounded-bottom text-center">احجز</span>
                </div>
                  <div className="bg-body mx-auto  d-flex flex-column text-center "  style={{"width":"6em"}}>
                    <span className=" bg-primary text-light px-5 py-2 rounded-top text-center">الأحد</span>
                    <span className="px-3 py-2 text-center">10:00 م</span>
                    <span className="px-3 py-2 text-center">10:30 م</span>
                    <span className="px-3 py-2 text-center">11:00 م</span>
                    <span className="px-3 py-2 text-center">المزيد</span>
                    <span className=" bg-danger text-light px-5 py-2 rounded-bottom text-center">احجز</span>
                </div>
                  <div className="bg-body mx-auto d-flex flex-column text-center" style={{"width":"6em"}} >
                      <span className=" bg-primary text-light px-5 py-2 rounded-top text-center">غداً</span>
                      <span className="px-3 py-2 text-center">10:00 م</span>
                      <span className="px-3 py-2 text-center">10:30 م</span>
                      <span className="px-3 py-2 text-center">11:00 م</span>
                      <span className="px-3 py-2 text-center">المزيد</span>
                      <span className=" bg-danger text-light px-5 py-2 rounded-bottom text-center">احجز</span>
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