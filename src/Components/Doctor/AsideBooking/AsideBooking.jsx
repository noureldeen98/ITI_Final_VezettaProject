import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../../../FireBaseConfiguration/FirebaseConfiguration'
import '../Middle/middlePartStyle.css'

const AsideBooking = (prc) =>{

let Fees = prc.mony
const cash = Fees.Price

const history = useHistory();
//  console.log(Fees.timeTables)
const { t } = useTranslation();
const login = localStorage.getItem('Login')
const usrID = localStorage.getItem('usrID')

const newTimeTabes = [];
let usrAppointment = [];

const addAppointment = async () => {
  // const datee = e.target.id
  // const currentTime = e.target.innerHTML;


  const hour = localStorage.getItem('AppHour')
  const day = localStorage.getItem('AppDay')
  const date = localStorage.getItem('AppDate')
  const doc = localStorage.getItem('AppDoc')
  const datee = localStorage.getItem('datee')
  const currentTime = localStorage.getItem('currentTime')
  const clincAddrs = localStorage.getItem('clincAddrs')
  const UsrName = localStorage.getItem('Name')

  // console.log(hour,date,day,datee,doc,currentTime,'else')
  const usrObj = {
    date: date,
    day: day,
    hour: hour,
    DoctorName: doc,
    ClincAddrs: clincAddrs
  }
  db.collection('Users').doc(usrID).get().then(doc => {
    if (doc.data().appointment) {
      // console.log(doc.data().appointment);
      usrAppointment = doc.data().appointment
      //  console.log('usrAppointment',usrAppointment)
    }
    usrAppointment.push(usrObj)
  })

  // console.log('usrAppointment after add new appointment',usrAppointment)

  const docts = query(collection(db, '/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
    where('Name', '==', doc));

  const details = await getDocs(docts)
  details.forEach((doc) => {
    // console.log(doc.data().timeTables)

    const myTimes = doc.data().timeTables;
    // console.log('myTimes',myTimes)
    // console.log('datee',datee)
    myTimes && myTimes.map(time => {
      if (time.date == datee) { //
        // console.log('one',time);//get complete object
        //loop on hours to edit status
        time.hours.map(hour => {
          // console.log('one', hour.hour, 'two', currentTime, 'three', 
          // (hour.hour.split(":")[0] === currentTime.split(":")[0]) && 
          // (hour.hour.split(":")[1] == currentTime.split(":")[1]));
          // console.log('before hour', time);
          if ((hour.hour.split(":")[0] === currentTime.split(":")[0]) &&
            Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1])) {
            // console.log('hey', hour.hour, 'and', currentTime);
            // console.log('hello time', hour);
            const hoursOld = [...time.hours, { hour: hour.hour, status: 'busy' }];
            const crntTime = hoursOld.find(hour => (hour.hour.split(":")[0] == currentTime.split(":")[0]) &&
              Number.parseInt(hour.hour.split(":")[1]) == Number.parseInt(currentTime.split(":")[1]));
            const index = hoursOld.indexOf(crntTime);

            const newObj = hoursOld.pop(index);

            // console.log('hoursOd', hoursOld);
            // console.log('newObj', newObj);
            var newObj2 = {
              date: time.date,
              day: time.day,
              hours: [...time.hours, { hour: hour.hour, status: UsrName }]
            }

            // console.log('new',newObj2);
            let test = newObj2.hours.filter((ele, ind) => ind === newObj2.hours.findLastIndex(elem => elem.hour === ele.hour))
            //  console.log('after filter test ',test)

            var newObj3 = {
              date: time.date,
              day: time.day,
              hours: test
            }
            // console.log('newObj3 ',newObj3)
            newTimeTabes.push(newObj3);
            // console.log('add newObj3', newTimeTabes);
            // console.log('usrAppointment after new obj3',usrAppointment)

            db.collection('Users').doc(usrID).update({
              appointment: usrAppointment
            })
          }
        })
      } else {
        // console.log('two', time);
        newTimeTabes.push(time);
      }
    })

    // console.log('new time', newTimeTabes);
    db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id).update({
      timeTables: newTimeTabes
    })


    //    updateDoc(db.collection('Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(doc.id), {
    //     stuts: arrayRemove("busy")
    // });

    history.push('/Reservation');
  })




}


const openModal = (e, hour, day, date, doc) => {

  if (!login) {

    history.push('/Signin');
  }
  else {

    localStorage.setItem('AppDate', date)
    localStorage.setItem('AppDay', day)
    localStorage.setItem('AppHour', hour)
    localStorage.setItem('AppDoc', doc.Name)
    localStorage.setItem('datee', e.target.id)
    localStorage.setItem('currentTime', e.target.innerHTML)
    localStorage.setItem('clincAddrs', doc.Clinic_Address)



    //  console.log(hour,day,date,doc,e)
  }

}

return (
  <>
    <div className="col-md-5   overflow-hidden " id="money">
      <div className=" shadow-lg p-3  mb-5 bg-body rounded-3 m-4  d-block sticky-lg-top  " >
        <p className="text-center text-light bg-primary rounded-top fs-4">{t('Book_Info')}</p>
        <div className="row ">
          <div className="text-center">
            <p className="text-center"><i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger fs-3 text-center"></i></p>
            <span> {t('Price', { cash })}</span>
          </div>
          <hr />
          <p className="text-center fs-4 fw-bold">{t('Book_Telehealth')}</p>
          <div className="d-flex  flex-row bd-highlight mt-4  mb-3 text-center mx-auto ">
            <div className=" d-md-flex  flex-row bd-highlight mx-auto  text-center overflow-auto" >
              {Fees.timeTables && Fees.timeTables.map((tm, indx) => {
                return (
                  <div className="bg-body   mx-auto   px-2 d-flex flex-column text-center mb-1 " style={{ "width": "250px" }} key={indx}>
                    <span className="bg-primary text-light px-3 py-2 rounded-top text-center">{tm.day}</span>
                    <p className="bg-primary text-light px-3 py-1 text-center mb-0">{tm.date}</p>
                    {tm.hours.map((h, inedex) => {
                      return (
                        <>
                          <button type="button" data-bs-toggle="modal" data-bs-target="#examplModal" key={inedex}
                            id={tm.date} className={h.status === 'empty' ? "btn btn-light mt-0" : 'text-decoration-line-through btn btn-light mt-0 disabled'}
                            onClick={(e) => openModal(e, h.hour, tm.day, tm.date, Fees)}>{h.hour} </button>
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
                            {t('Modal_Serve')}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Cancle')}</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                              onClick={() => addAppointment()}>{t('Yes')}</button>
                          </div>
                        </div>
                      </div>
                    </div>}
                    <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">{t('Book')}</span>
                  </div>)
              })}
            </div>

          </div>
          <hr />
          <p className="text-center text-secondary">{t('Call')}</p>
          <hr />
          <p className="text-center text-secondary"> {t('Connect_With_Doc')}</p>
        </div>
      </div>
    </div>
  </>
)

}

export default AsideBooking