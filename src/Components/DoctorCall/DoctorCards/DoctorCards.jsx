import{getAllDoctorAction,filterDoctor,clearDoctor} from '../../../ReactRedux/Actions/DoctorCallAction'
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import {db} from '../../../FireBaseConfiguration/FirebaseConfiguration'
import './DoctorCards.css'
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { langContext } from '../../../Context/LangContext';
import { useLocation ,useHistory ,Link } from "react-router-dom";
import queryString from 'query-string';
import { query, collection, getDocs, where } from 'firebase/firestore';

const DoctorCards=()=>{
  
  const location = useLocation();
  const value=queryString.parse(location.search);
  // console.log(value)
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.getDoctors);
   const loader = useSelector((state) => state.loader.loader);

   const login=localStorage.getItem('Login')
   const usrID = localStorage.getItem('usrID')
   const history = useHistory();
   const newTimeTabes = [];
   let usrAppointment=[];

   
  useEffect(() =>{
    if(location.search=='')
    {
      dispatch(getAllDoctorAction())
    }
    else{
      dispatch(filterDoctor(value.dpt,value.city,value.area,value.doc))
    }

    console.log(doctors)

    return () => {
      dispatch(clearDoctor());
    };

   } ,[] );

   const { t } = useTranslation();
   const {lang, setLang} = useContext(langContext);   

  const addAppointment=async()=>{
    // const datee = e.target.id
    // const currentTime = e.target.innerHTML;


    const hour=localStorage.getItem('AppHour')
    const day=localStorage.getItem('AppDay')
    const date=localStorage.getItem('AppDate')
    const doc=localStorage.getItem('AppDoc')
    const datee=localStorage.getItem('datee')
    const currentTime=localStorage.getItem('currentTime')
    const clincAddrs=localStorage.getItem('clincAddrs')
    const UsrName = localStorage.getItem('Name')

      console.log(hour,date,day,datee,doc,currentTime,'else')
     const usrObj={
      date: date,
      day: day,
      hour: hour,
      DoctorName:doc,
      ClincAddrs:clincAddrs
    }
      db.collection('Users').doc(usrID).get().then(doc => {
        console.log(doc.data().appointment);
        usrAppointment=doc.data().appointment
        console.log('usrAppointment',usrAppointment)
        usrAppointment.push(usrObj)
      })

      console.log('usrAppointment after add new appointment',usrAppointment)
     
      const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
            where('Name','==',doc));

            const details = await getDocs(docts)
            details.forEach((doc) => {
              console.log(doc.data().timeTables)

              const myTimes = doc.data().timeTables;
              console.log('myTimes',myTimes)
              console.log('datee',datee)
              myTimes && myTimes.map(time => {
                if(time.date == datee ) { //
                  // console.log('one',time);//get complete object
                  //loop on hours to edit status
                  time.hours.map(hour => {
                    // console.log('one', hour.hour, 'two', currentTime, 'three', 
                    // (hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
                    // (hour.hour.split(":")[1] == currentTime.split(":")[1]));
                    console.log('before hour', time);
                    if((hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
                    Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1])) {
                      // console.log('hey', hour.hour, 'and', currentTime);
                      // console.log('hello time', hour);
                      const hoursOld = [...time.hours, {hour: hour.hour, status: 'busy'}];
                      const crntTime = hoursOld.find(hour => (hour.hour.split(":")[0] == currentTime.split(":")[0]) && 
                      Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1]));
                      const index = hoursOld.indexOf(crntTime);

                      const newObj = hoursOld.pop(index);
                
                      console.log('hoursOd', hoursOld);
                      console.log('newObj', newObj);
                      var newObj2 = {
                        date: time.date,
                        day: time.day,
                        hours: [...time.hours, {hour: hour.hour, status: UsrName}]
                      }

                      console.log('new',newObj2);
                      let test = newObj2.hours.filter( (ele, ind) => ind === newObj2.hours.findLastIndex( elem => elem.hour === ele.hour ))
                       console.log('after filter test ',test)

                       var newObj3 = {
                        date: time.date,
                        day: time.day,
                        hours:test
                      }
                      console.log('newObj3 ',newObj3)
                      newTimeTabes.push(newObj3);
                      console.log('add newObj3', newTimeTabes);
                      console.log('usrAppointment after new obj3',usrAppointment)

                      db.collection('Users').doc(usrID).update({
                        appointment: usrAppointment
                      })
                    }
                  })
                } else {
                  console.log('two', time);
                  newTimeTabes.push(time);
                }
              }) 

              console.log('new time', newTimeTabes);
              db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id).update({
                timeTables:newTimeTabes
             })

              
            //    updateDoc(db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id), {
            //     stuts: arrayRemove("busy")
            // });

                history.push('/Reservation');
            })

    


    }

    const openModal=(e, hour,day,date,doc)=>{

      if(!login)
    {
      
       history.push('/Signin');
       }
       else{

       localStorage.setItem('AppDate',date)
       localStorage.setItem('AppDay',day)
       localStorage.setItem('AppHour',hour)
       localStorage.setItem('AppDoc',doc.Name)
       localStorage.setItem('datee',e.target.id)
       localStorage.setItem('currentTime',e.target.innerHTML)
       localStorage.setItem('clincAddrs',doc.Clinic_Address)
       


       console.log(hour,day,date,doc,e)
      }

    }
  
    return(
        <>
      
        <div className="col-md-9 overflow-hidden col-sm-11 align-self-center name" >
        <span className="fs-4 text-secondary fw-bold"> {t('All_Specialities')} </span>
       <span className="fs-5 text-secondary fw-light">	&nbsp; {t('Doctor')}</span>
       <div className="fs-4 text-secondary fw-light float-start "> {t('Sorting')}:
       <div className="dropdown float-start me-3 px-4">
        <button className="btn btn-light dropdown-toggle  text-secondary  px-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {t('Best_Match')}
        </button>
        <ul className="dropdown-menu  p-3" aria-labelledby="dropdownMenuButton1">
          <div className="form-check py-2 ">
            <input className="form-check-input float-end ms-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault1">
              &nbsp;{t('Best_Match')}	&nbsp;
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault2">
            {t('Top_Rated')}
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2  " type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
            <label className="form-check-label text-secondary" forhtml="flexRadioDefault5">
            {t('Price_Low_High')}
            </label>
          </div>
          <div className="form-check py-2">
            <input className="form-check-input float-end ms-2 me-2  " type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
            <label className="form-check-label text-secondary " forhtml="flexRadioDefault6">
            {t('Price_High_Low')}
            </label>
          </div>
        </ul>
      </div>
    </div>
    <br/>
    {loader && (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <br/>

    {doctors.doctor.map((doc,index) => {
                      console.log(doc.timeTables)
                  let cash=doc.Price;
                   return (
                    <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4  d-block " key={index}>
                    <div className="row justify-content-center">
                        <div className="col-2">
                         <img src={doc.Image} className="card-img rounded   rounded-circle  mt-5 me-2 " alt="imge" />
                        </div>
                        <div className="card-text col-lg-4 col-md-9 col-sm-8 me-4 overflow-hidden align-self-center">
                          <span className="text-primary fs-5 overflow-hidden">{t('doc')}  <Link to={{pathname:`/MergeDoctor/${doc.Name}`, state: { fromCovid: false}}}className="fs-3 text-decoration-none"> {lang=='en'? doc.nameInArabic : doc.Name} </Link> </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i>
                          <p>{lang=='en'? doc.departmentInArabic : doc.Department}  </p>
                          <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                          <p>{t('Overall_Rating_From')} {doc.Rate} {t('Visitors')} </p>
                          <i className="fas fa-stethoscope border-bottom border-danger  pb-2 m-2 text-primary"></i>
                          <span>{lang=='en'? doc.titleInArabic : doc.Title} </span><br/><br/>
                          <i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i>
                          <span> {t('Price',{cash} )}   </span>
                          <span className="border border-secondary ms-2 p-1 rounded-3 text-secondary"><i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i> {t('Promo_code')}  </span><br/><br/>
                          <i className="fas fa-phone-alt text-primary border-bottom border-danger me-2 ms-3 pb-1 fs-5"></i>
                          <span>{t('No')} - {t('Cost')}  </span>
                           </div>
                          <div className="col-lg-5  col-sm-6 d-none d-md-flex  flex-row bd-highlight  mt-4 me-1 text-center overflow-hidden">
                          {doc.timeTables&&doc.timeTables.map((tm,indx)=>{
                            return(
                            <div className="bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}} key={indx}>                        
                              <span className="bg-primary text-light px-3 py-2 rounded-top text-center">{tm.day}</span>
                              <p className="bg-primary text-light px-3 py-1 text-center">{tm.date}</p>
                              {tm.hours.map((h,i)=>{
                                return(
                                  <>
                                  <button type="button" key={i} data-bs-toggle="modal" data-bs-target="#examplModal"
                                  id={tm.date} className={h.status==='empty' ?  "btn btn-light" :'text-decoration-line-through btn btn-light disabled' } 
                                  onClick={(e)=>openModal(e,h.hour,tm.day,tm.date,doc)}>{h.hour} </button>

                                {/* <button type="button" data-bs-toggle="modal" data-bs-target="#examplModal"
                                  id={tm.date} className={h.status==='empty' ?  "btn btn-light" :'text-decoration-line-through btn btn-light disabled' } key={i}
                                  >{h.hour} </button>
                                  <div className="modal fade" id="examplModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div className="modal-body">
                                        Are You Sure to Reserve this appointment?
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={()=>addAppointment()}>Yes</button>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
</>
                                )
                              })}
                             {login && <div className="modal fade" id="examplModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div className="modal-body">
                                      {t('Modal_Serve' )}
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Cancle' )}</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick={()=>addAppointment()}>{t('Yes' )}</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>}
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">{t('Book' )}</span>
                          </div>)
                          })   }
                           
                          </div> 
                          <p className="text-center ms-5">{t('Call' )}</p>
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