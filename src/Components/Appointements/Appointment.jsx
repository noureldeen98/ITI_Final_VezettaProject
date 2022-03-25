import React, { useEffect, useState } from 'react';
import style from './Appointment.module.css';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import { db } from '../../FireBaseConfiguration/FirebaseConfiguration';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Appointment() {

  const [t, i18n] = useTranslation();
  const history = useHistory();
  var usrName = localStorage.getItem('Name');
  var userID = localStorage.getItem('usrID');
  const [userApp, setUserApp] = useState([]);
  const loader = useSelector((state) => state.loader.loader);
  let userAppointments = [];
  let usrAppDlte = []
  const newTimeTabes = [];
  /* [
      {docName: '', 
      clinicAddress: '',
      bookApp: date, day , hours,
      details: 'tm al8aa l 7agz'
      }
  ]
  */
  const dispatch = useDispatch();
  const selector = useSelector(state => state.getDoctors);
  useEffect(() => {
    const test = async () => {
      if (userID) {
        let userData = await db.collection('/Users').doc(userID).get();
        const uData = userData.data();
        userAppointments = uData.appointment;
        let allApp = [];
        userAppointments.map(app => {
          const doctorName = app.DoctorName;
          const docAdd = app.ClincAddrs;
          var newApp = {
            docName: doctorName,
            appointment: app.day + ' ' + app.date + ' ' + app.hour,
            docAdd
          };
          allApp.push(newApp);
        })
        setUserApp(allApp)
      }
    }
    test();

  }, [])

  const getDeleteElement = (data) => {
    // console.log(data)
    localStorage.setItem('DeletDoc', data.docName)
    localStorage.setItem('DeletAdrs', data.docAdd)
    localStorage.setItem('DeletAPPointment', data.appointment)
  }
  const ConfirmDeletion = async () => {

    let DeletDoc = localStorage.getItem('DeletDoc');
    let DeletAdrs = localStorage.getItem('DeletAdrs');
    let DeletAPPointment = localStorage.getItem('DeletAPPointment');

    db.collection('Users').doc(userID).get().then(doc => {
      // console.log(doc.data().appointment)
      usrAppDlte = doc.data().appointment
      // console.log(usrAppDlte)
      usrAppDlte && usrAppDlte.map(appoint => {

        if (appoint.day === DeletAPPointment.split(" ")[0] &&
          appoint.date === DeletAPPointment.split(" ")[1] &&
          appoint.hour === DeletAPPointment.split(" ")[2] &&
          appoint.ClincAddrs === DeletAdrs &&
          appoint.DoctorName === DeletDoc) {

          // console.log('DeletAPPointment', DeletAPPointment)
          // console.log('appoint', appoint)
          let index = usrAppDlte.indexOf(appoint)
          // console.log('index', index)

          if (index !== -1) {
            usrAppDlte.splice(index, 1);
          }



          // console.log('after Delete APPointment', usrAppDlte)

          db.collection('Users').doc(userID).update({
            appointment: usrAppDlte
          })

        }
      })
     

    })
    const docts = query(collection(db, '/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
      where('Name', '==', DeletDoc));

    const details = await getDocs(docts)
    details.forEach((doc) => {
      // console.log(doc.data().timeTables)
      const myTimes = doc.data().timeTables;

      myTimes && myTimes.map(time => {
        if (time.date == DeletAPPointment.split(" ")[1]) { //
          // console.log('one',time);//get complete object
          //loop on hours to edit status
          time.hours.map(hour => {
            // console.log('one', hour.hour, 'two', DeletAPPointment.split(" ")[2], 'three', 
            // (hour.hour.split(":")[0] === DeletAPPointment.split(" ")[2].split(":")[0]) && 
            // (hour.hour.split(":")[1] == DeletAPPointment.split(" ")[2].split(":")[1]));
            // console.log('before hour', time);
            if ((hour.hour.split(":")[0] === DeletAPPointment.split(" ")[2].split(":")[0]) &&
              Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(DeletAPPointment.split(" ")[2].split(":")[1])) {
              // console.log('hey', hour.hour, 'and', DeletAPPointment.split(" ")[2]);
              // console.log('hello time', hour);
              const hoursOld = [...time.hours, { hour: hour.hour, status: usrName }];
              const crntTime = hoursOld.find(hour => (hour.hour.split(":")[0] == DeletAPPointment.split(" ")[2].split(":")[0]) &&
                Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(DeletAPPointment.split(" ")[2].split(":")[1]));
              const index = hoursOld.indexOf(crntTime);

              const newObj = hoursOld.pop(index);

              // console.log('hoursOd', hoursOld);
              // console.log('newObj', newObj);
              var newObj2 = {
                date: time.date,
                day: time.day,
                hours: [...time.hours, { hour: hour.hour, status: 'empty' }]
              }

              // console.log('new', newObj2);
              let test = newObj2.hours.filter((ele, ind) => ind === newObj2.hours.findLastIndex(elem => elem.hour === ele.hour))
              //  console.log('after filter test ',test)

              var newObj3 = {
                date: time.date,
                day: time.day,
                hours: test
              }
              // console.log('newObj3 ', newObj3)
              newTimeTabes.push(newObj3);
              // console.log('add newObj3', newTimeTabes);
              // console.log('usrAppointment after new obj3',usrAppointment)

            }
          })
        } else {
          // console.log('two', time);
          newTimeTabes.push(time);
        }
        
      })

      db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id).update({
        timeTables: newTimeTabes
      })

     
    })
   
    setTimeout(() => {
     
      notify();
      history.push('/home');

    }, 500);

  }

  const notify = () => {

    // Calling toast method by passing string
    toast.error(t('Booking_canceled'), { position: toast.POSITION.BOTTOM_CENTER })
  }

  return (
    <>
      {
        (usrName) ? (<>
          {/* {t('appointment.mytimetable')} */}
          
          <div className="app" id={style.app}>
            <div className="row">
              <nav aria-label="breadcrumb" id="brcrumb">
                <ol className="breadcrumb ">
                  <li className="breadcrumb-item mt-2 me-5 ms-1"><Link to="/home" className="text-decoration-none">  {t('Vezeeta')}</Link></li>
                  <li className="breadcrumb-item active mt-2" aria-current="page">  {t('appointment.mytimetable')}</li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <table className='table table-striped p-3 m-3'>
                <thead>
                  <tr className='p-5'>
                    <th scope="col">{t('appointment.doctorName')}</th>
                    <th scope="col">{t('appointment.where')}</th>
                    <th scope="col">{t('appointment.app')}</th>
                    <th scope="col">{t('appointment.info')}</th>
                  </tr>
                </thead>
                
                <tbody>
                
                  {userApp.map((data, index) => (
                    
                    <tr key={index}>
                      <td>{data.docName}</td>
                      <td>{data.docAdd}</td>
                      <td>{data.appointment}</td>
                      <td>{data.other}</td>
                      <td><button type="button" className="btn btn-danger"
                        data-bs-toggle="modal" data-bs-target="#exmplModal"
                        onClick={() => getDeleteElement(data)}> {t('delete')}</button></td>
                    </tr>
                  ))}

                </tbody>
                
              </table>
              
              <div className="modal fade" id="exmplModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-primary fs-3">
                      {t('Cancele_Reserv')}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                        onClick={ConfirmDeletion}>{t('Yess')}</button>
                      <button type="button" className="btn btn-light" data-bs-dismiss="modal">{t('Noo')}</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {userApp.length>0?<>
          </>
          
          :
          <p>No Appointment Yet</p>} */}
          </>
        ) : (
          <div className="app" id={style.app}>
            <h2 className='text-center text-secondary m-4 p-4'>{t('appointment.sign')}</h2>
          </div>
        )
      }


    </>
  )
}
