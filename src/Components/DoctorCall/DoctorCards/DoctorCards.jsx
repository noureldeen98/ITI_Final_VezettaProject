import{getAllDoctorAction} from '../../../ReactRedux/Actions/DoctorCallAction'
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {storage} from '../../../FireBaseConfiguration/FirebaseConfiguration'
import { ref, getDownloadURL } from "firebase/storage";
import './DoctorCards.css'

const DoctorCards=(props)=>{
  
// let doctors=props

  // const[doct,setDoc]=useState([intial.doctor])
  
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.getDoctors);
   const loader = useSelector((state) => state.loader.loader);
//   const[doct,setDoc]=useState([selector])

//   const Doctors=()=>{
//   doct.map(d=>{
//     setDoc(d)
//   })
//   }
  useEffect(() =>{
    dispatch(getAllDoctorAction())
    //console.log(doctors.doctor.Name)
    // storage()
    //   .ref('DoctorCall/')
    //   .listAll()
    //   .then(function(result) {
    //       result.items.forEach(function(imageRef) {
    //           imageRef.getDownloadURL().then(function(url) {
    //               imageTab.push(url);
    //               setImageTab(imageTab);
    //               console.log("URL"+url)
    //           }).catch(function(error) {
    //               // Handle any errors
    //           });
    //       });
    //   })
    //   .catch((e) => console.log('Errors while downloading => ', e));


  //   const getImage = async (img) => {
  //     const storageRef = ref(storage, `DoctorCall/${img}.jpg`);
  //     let url = await getDownloadURL(storageRef);
  // console.log(url)
  //     return url;
  // }
  // getImage(doctors.doctor.Image)
 
  // const ImgArr=[
  //   {Imge:'amal',
  //   url:}
  // ]

    const fetchImages = async () => {
      let result = await storage.ref().child("DoctorCall").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
      console.log(urls)
      var httpsReference = storage.refFromURL(urls[2]);
  let fileName = httpsReference.name;
  console.log(fileName)
    };
    loadImages();


  // const fetchImages = async () => {

  //   let result = await storage().ref('DoctorCall').child('DoctorCall').listAll();
  //       let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
    
  //       return Promise.all(urlPromises);

  //   }
    
  //   const loadImages = async () => {
  //       const urls = await fetchImages();
  //       setFiles(urls);
  //       console.log(files)
  //   }
  //   loadImages();
   } ,[] );
  
//   //setDoc(...selector)
//console.log(doctors.docData[0])
   //console.log(doctors.doctor.name)
  //console.log(...selector.Price)
    return(
        <>

       
        <div className="col-md-9 overflow-hidden col-sm-11 align-self-center name" >
        <span className="fs-4 text-secondary fw-bold"> كل التخصصات</span>
       <span className="fs-5 text-secondary fw-light">	&nbsp;1664 دكتور</span>
       <div className="fs-4 text-secondary fw-light float-start "> ترتيب:
       <div className="dropdown float-start me-3">
        <button className="btn btn-light dropdown-toggle  text-secondary  px-3 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                   console.log(doc.Image)
                   return (
                    <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4  d-block " key={index}>
                    <div className="row justify-content-center">
                        <div className="col-2">
                        
                          {/* {files.map=(i=>{<img src={i} alt=""/>})} */}
                          <img src={files[index]} className="card-img rounded   rounded-circle  mt-5 me-2 " alt="image" />
                         {/* <img src={doc.Image} className="card-img rounded   rounded-circle  mt-5 me-2 " alt="image" /> */}
                        </div>
                        <div className="card-text col-lg-5 col-md-9 col-sm-8 me-4 overflow-hidden align-self-center">
                          <span className="text-primary fs-5 overflow-hidden">دكتور  <Link to={`/MergeDoctor/${doc.Name}`}className="fs-3 text-decoration-none"> {doc.Name} </Link> </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i>
                          <p>{doc.Department}  </p>
                          <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                          <p>التقييم العام من {doc.Rate} زاروا الدكتور</p>
                          <i className="fas fa-stethoscope border-bottom border-danger  pb-2 m-2 text-primary"></i>
                          <span>{doc.Title} </span><br/><br/>
                          <i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i>
                          <span>الكشف : {doc.Price} جنيه </span>
                          <span className="border border-secondary ms-2 p-1 rounded-3 text-secondary"><i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i> تقبل أكواد الخصم</span><br/><br/>
                          <i className="fas fa-phone-alt text-primary border-bottom border-danger me-2 ms-3 pb-1 fs-5"></i>
                          <span>١٦٦٧٦ - سعر مكالمة عادية</span>
                           </div>
                          <div className="col-lg-4  col-sm-6 d-none d-md-flex  flex-row bd-highlight mt-4 me-1 text-center overflow-hidden">
                            <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center" style={{"width": "250px"}}>
                              <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">اليوم</span>
                              <span className="px-3 py-2 text-center">10:00 م</span>
                              <span className="px-3 py-2 text-center">10:30 م</span>
                              <span className="px-3 py-2 text-center">11:00 م</span>
                              <span className="px-3 py-2 text-center">المزيد</span>
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">احجز</span>
                          </div>
                            <div className="   bg-body   mx-auto   px-2 d-flex flex-column text-center overflow-hidden" style={{"width": "250px"}}>
                              <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">الأحد </span>
                              <span className="px-3 py-2 text-center">10:00 م</span>
                              <span className="px-3 py-2 text-center">10:30 م</span>
                              <span className="px-3 py-2 text-center">11:00 م</span>
                              <span className="px-3 py-2 text-center">المزيد</span>
                              <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">احجز</span>
                          </div>
                            <div className="   bg-body mx-auto   px-2 d-flex flex-column text-center overflow-hidden" style={{"width": "250px"}}>
                                <span className=" bg-primary text-light px-3 py-2 rounded-top text-center">غداً</span>
                                <span className="px-3 py-2 text-center">10:00 م</span>
                                <span className="px-3 py-2 text-center">10:30 م</span>
                                <span className="px-3 py-2 text-center">11:00 م</span>
                                <span className="px-3 py-2 text-center">المزيد</span>
                                <span className=" bg-danger text-light px-3 py-2 rounded-bottom text-center">احجز</span>
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