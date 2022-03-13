
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AsideBooking=(prc)=>{
  //let [cash]=useState(prc.mony)
  let Fees=prc.mony
  let cash=Fees.Price
  // let docPrice=cash[0].Price
// console.log(cash)
const { t } = useTranslation();

return(
    <>
    <div className="col-md-5   overflow-hidden "  id="money">
          <div className=" shadow-lg p-3  mb-5 bg-body rounded-3 m-4  d-block sticky-lg-top  " >
            <p className="text-center text-light bg-primary rounded-top fs-4">{t('Book_Info')}</p>
            <div className="row ">
              <div className="text-center">
             <p className="text-center"><i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger fs-3 text-center"></i></p>
              <span> {t('Price',{cash})}</span>
                </div>
                <hr/>
                <p  className="text-center fs-4 fw-bold">{t('Book_Telehealth')}</p>
                <div className="d-flex  flex-row bd-highlight mt-4  mb-3 text-center ">
                  <div className="bg-body mx-auto d-flex flex-column text-center" style={{"width":"6em"}}>
                    <span className="bg-primary text-light px-4 py-2 rounded-top text-center">{t('Today')}</span>
                    <span className="px-3 py-2 text-center">10:00 {t('PM')}</span>
                    <span className="px-3 py-2 text-center">10:30 {t('PM')}</span>
                    <span className="px-3 py-2 text-center">11:00 {t('PM')}</span>
                    <span className="px-3 py-2 text-center">{t('More')}</span>
                    <span className=" bg-danger text-light px-4 py-2 rounded-bottom text-center">{t('Book')}</span>
                </div>
                  <div className="bg-body mx-auto  d-flex flex-column text-center "  style={{"width":"6em"}}>
                    <span className=" bg-primary text-light px-4 py-2 rounded-top text-center">{t('Sun')}</span>
                    <span className="px-3 py-2 text-center">10:00 {t('PM')}</span>
                    <span className="px-3 py-2 text-center">10:30 {t('PM')}</span>
                    <span className="px-3 py-2 text-center">11:00 {t('PM')}</span>
                    <span className="px-3 py-2 text-center">{t('More')}</span>
                    <span className=" bg-danger text-light px-4 py-2 rounded-bottom text-center">{t('Book')}</span>
                </div>
                  <div className="bg-body mx-auto d-flex flex-column text-center" style={{"width":"6em"}} >
                      <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">{t('Tomorrow')}</span>
                      <span className="px-3 py-2 text-center">10:00 {t('PM')}</span>
                      <span className="px-3 py-2 text-center">10:30 {t('PM')}</span>
                      <span className="px-3 py-2 text-center">11:00 {t('PM')}</span>
                      <span className="px-3 py-2 text-center">{t('More')}</span>
                      <span className=" bg-danger text-light px-4 py-2 rounded-bottom text-center">{t('Book')}</span>
                  </div>
                 
                </div> 
                <hr/>
                <p className="text-center text-secondary">{t('Call')}</p>
                <hr/>
                <p className="text-center text-secondary"> {t('Connect_With_Doc')}</p>
                </div>
              </div>
        </div>
    </>
)

}

export default AsideBooking