import{getAllDoctorAction} from '../../../ReactRedux/Actions/DoctorCallAction'
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const DoctorCards=(props)=>{
  
let doctors=props

  // const[doct,setDoc]=useState([intial.doctor])
 // const dispatch = useDispatch();
//   const selector = useSelector((state) => state.getDoctors.doctor);
//   const[doct,setDoc]=useState([selector])

//   const Doctors=()=>{
//   doct.map(d=>{
//     setDoc(d)
//   })
//   }
//   useEffect(() =>
  
//  // dispatch(getAllDoctorAction()),
 
  
//   )
//   //setDoc(...selector)
//console.log(doctors.docData[0])
//   console.log(selector)
  //console.log(...selector.Price)
    return(
        <>
        <div className="col-md-8" >
        <span className="fs-4 text-secondary fw-bold"> كل التخصصات</span>
       <span className="fs-5 text-secondary fw-light">	&nbsp;1664 دكتور</span>
       <div className="fs-4 text-secondary fw-light float-start "> ترتيب:
       <div className="dropdown float-start me-3">
        <button className="btn btn-light dropdown-toggle  text-secondary  px-5 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         الأكثر تطابقاً
        </button>
        <ul className="dropdown-menu  p-3" aria-labelledby="dropdownMenuButton1">
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault1">
              &nbsp; الأكثر تطابقاً	&nbsp;
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault2">
             أعلى التقييمات
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2  " type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault5">
              الأقل سعراً
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2  " type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
            <label className="form-check-label text-secondary " forhtml="flexRadioDefault6">
              الأعلى سعراً
            </label>
          </div>
        </ul>
      </div>
    </div>
    {doctors.docData[0].map((doc,index) => {
                   console.log(doc)
                   return (
                    <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4 mx-auto d-block" key={index}>
                    <div className="row">
                        <div className="col-2">
                          <img src={doc.Image} className="card-img rounded   rounded-circle  mt-5 me-2 " alt="image" />
                        </div>
                        <div className="card-text col-lg-5 col-md-9 col-sm-8 me-4">
                          <span className="text-primary fs-5">دكتور  <Link to={`/MergeDoctor/${doc.name}`}className="fs-3 text-decoration-none"> {doc.name} </Link> </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i>
                          <p>{doc.Department}  </p>
                          <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                          <p>التقييم العام من {doc.Rate} زاروا الدكتور</p>
                          <i className="fas fa-stethoscope border-bottom border-danger  pb-2 m-2 text-primary"></i>
                          <span>{doc.Title} </span><br/><br/>
                          <i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i>
                          <span>الكشف : {doc.Price} جنيه </span>
                          <span className="border border-secondary ms-2 p-1 rounded-3 text-secondary"><i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i> تقبل أكواد الخصم</span><br/><br/>
                          <i className="fas fa-phone-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i>
                          <span>١٦٦٧٦ - سعر مكالمة عادية</span>
                           </div>
                          <div className="col-lg-4  col-sm-6 d-none d-md-flex  flex-row bd-highlight mt-4 me-1">
                            <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                              <span className=" bg-primary text-light px-3 py-2 rounded-top">اليوم</span>
                              <span className="px-3 py-2">10:00 م</span>
                              <span className="px-3 py-2">10:30 م</span>
                              <span className="px-3 py-2">11:00 م</span>
                              <span className="px-3 py-2">المزيد</span>
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom">احجز</span>
                          </div>
                            <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                              <span className=" bg-primary text-light px-3 py-2 rounded-top">الأحد </span>
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
                          <p className="text-center ms-5">الاتصال بميعاد محدد</p>
                      </div>
                      </div>
                      
                      )
                   })
                  }
                 
        </div>
        </>
    )

}
export default DoctorCards;