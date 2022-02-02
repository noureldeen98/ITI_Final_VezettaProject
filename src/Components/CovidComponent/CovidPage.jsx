
import { useEffect, useState } from 'react';
// import ReducerOfFetchingCollectionsofDoctors from '../../ReactRedux/Reducers/ReducerOfFetchingCollectionsofDoctors'
import Doctorcard from '../Card/DoctorCard'
// import styleCovid from "./Covid.Module.css"
import NavbarComponent from '../home/header/NavbarComponent'
import './CovidStyle.css'
import Footer from '../home/footer/Footer';





const CovidPage = () =>{
  const basePathOfImages="../../Images/Doctors/"
  const theDataAboutDoctors=[
    {id:1 , Name:"منى عزت" , Image:`${basePathOfImages}peter.JPG`},
    {id:2 , Name:"بيتر كمال" , Image:`${basePathOfImages}peter.JPG`},
    {id:3 , Name:"اسلام" , Image:`${basePathOfImages}Islam.JPG`},
    {id:4 , Name:"مصطفى جمال" , Image:`${basePathOfImages}Mostafa.JPG`},
  ]
  // const collectionsOfDoctors = useSelector((state)=>state.doctorCollectionReducer)// get data from reducer
  // console.log(collectionsOfDoctors);
  // const  dispatch = useDispatch();//dispatch to fire the action

/* to Update the changes */
  // useEffect(()=>{
  //   dispatch(getCollectionOfDoctors())
  // },[])

  /************/

  const [Data]=useState(theDataAboutDoctors) // to store the data as we use the functional component "useState"

  return(
<>
<NavbarComponent/>
<div className="row afterNav">
        <div className="col-12 container" id="img1" style={{textAlign: "start"}}>

            <p className="text-secondary fs-3 fw-bold container mt-2">
                احجز مكالمة دكتور مع افضل دكاترة في مصر
            </p>
            <p className="text-secondary fs-4 container">
                احجز اونلاين او كلم &nbsp;
                <i className="fas fa-phone text-danger fs-5">
                </i>
                "&nbsp;16676"
            </p>

            <p className="text-secondary fs-4  container">
                ١٥٠٠٠ دكتور -٩٠٠٠ استاذ واستشاري - اكثر من ٤٠ تخصص
            </p>


        </div>

    </div>
    <div className="justify-content-center mt-3">
    <div className="card container aboutCovidCenter">
        <div className="row">
            <div className="flex-md-column col-lg-6   flex-lg-row justify-content-center">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="me.jpg" className="rounded-circle imageOfAboutCovidCenter  me-1 me-lg-2 mt-3 mb-5"/>
                    </div>

                    <div className="col-lg-6 container" style={{textAlign: "center"}}>
                        <div className=" d-flex flex-column  ">
                            <h4>مركز استشارات كورونا</h4>
                            <ul className="listOfStars  justify-content-center">
                                <li style={{color: "orange"}}>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li style={{color: "orange"}}>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li style={{color: "orange"}}>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li style={{color: "orange"}}>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li style={{color: "orange"}}>
                                    <i className="fas fa-star"></i>
                                </li>

                            </ul>

                            <p className="ms-4"> التقييم العام من ٣٠٥ زائر</p>
                            <p className="ms-4">تخصص طبى </p>
                            <p className="ms-4">مركز استشارات كورونا</p>
                            <p className="ms-4">شارك صفحة الموقع خلال:</p>

                        </div>
                    </div>

                </div>



            </div>
            <div className="col-lg-6" style={{top: "80px",left:"150px"}}>
                <button type="button" className="btn btn-primary mh-100 m-lg-5 "
                    style={{flexBasis:" 70%",marginRight:"10px" ,marginBottom: "10px"}}>احجز موعدك الان</button>
            </div>

        </div>



    </div>
</div>


<div className="col container" style={{width: "100%"}}>
    <div className="row " style={{textAlign: "center" ,width: "100%"}}>

        <div className="divOfDoctorsCards" id="divOfDoctorsCards">
            <nav style={{width:"100%"}} className="d-md-flex justify-content-center">
                <ul className="d-flex flex-row " style={{listStyle:"none"}}>
                    <li className="p-2">الدكاتره</li>
                    <li className="p-2">عن المركز</li>
                    <li className="p-2">تقيمات الزائرين</li>
                    <li className="p-2">التأمين الطبى</li>

                </ul>
                <hr/>
            </nav>

            <div className="dropDownLists">
                <ul className="d-flex flex-column flex-md-row" style={{listStyle:"none"}}>
                    <li className="m-2" style={{width: "100%"}}>
                        <select>
                            <option>باطنه</option>
                        </select>
                    </li>

                    <li className="m-2" style={{width: "100%"}}>
                        <select>
                            <option>كورونا</option>
                        </select>
                    </li>

                    <li className="m-2" style={{width: "100%"}}>
                        <select>
                            <option>كل التأمينات</option>
                        </select>
                    </li>


                </ul>
            </div>

            <Doctorcard doctorData={Data}/>
            

        </div>
    </div>
</div>
<Footer/>
   </>
  )
  
   


   

}
export default CovidPage;
