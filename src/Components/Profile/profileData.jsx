import React, {useState,useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { auth ,db} from "../../FireBaseConfiguration/FirebaseConfiguration";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { query, collection, getDocs, where } from 'firebase/firestore';

const ProfileData=()=>{

    const [t, i18n] = useTranslation();
    const history = useHistory();
    // const [userName,setUserName]=useState()
    
    const usrEmail = localStorage.getItem('UserEmail')
    const login=localStorage.getItem('Login')
    const [lgin,setlogin]=useState(login)
    const [name,setNme]=useState('')
    const [Email,setEmail]=useState('')
    const [Phone,setPhone]=useState('')
    const [DateBirth,setDateBirth]=useState('')
    const [ID,setID]=useState('')
    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem("UserEmail")
        localStorage.removeItem("usrID")
        localStorage.setItem("Login", false);
        setlogin(login)
        history.push('/home');
        //  localStorage.removeItem("Name");
    };
    useEffect(()=>{
    const getUer=async()=>{

        const Usr = query(collection(db,'/Users'),where('Emaile', '==', usrEmail));

            const details = await getDocs(Usr)
            details.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setID(doc.id)
                setNme(doc.data().Name)
                setEmail(doc.data().Emaile)
                setPhone(doc.data().Phone)
                setDateBirth(doc.data().DateBirth)
                localStorage.setItem('usrID',doc.id)
               
            })
            // localStorage.setItem('usrID',ID)

    }
    getUer(usrEmail);
},[])
  
   const UpdateUstDate=async(nme,emil,phne,BD)=>{

    db.collection('/Users').doc(ID).update({
        Name:nme,
        Emaile:emil,
        Phone:phne,
        DateBirth:BD
    })
    history.push('/home');
    }
 
    return(
        <>
        <div className="row w-75 py-4" id="form">
                <form className="needs-validation" noValidate>
                    <div id="one" className="row">
                        <p style={{ marginBottom: " 0%" }} className="text-center">{t('Usr_Data')}</p>
                    </div>
                    <hr />
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom01">{t('userName')}</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control container-fluid" id="FullName"
                                required  placeholder={t('placeHolderName')} 
                                value={name}
                                onChange={(e) => setNme(e.target.value)}/>
                            <div className="valid-feedback">{t('validName')}</div>
                        </div>
                    </div>
                    {/* one */}
                    <div className="row iteam-form ">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom01">{t('Emaile')}</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" id="Email" required
                                placeholder={t('placeHolderEmail')}                            
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            <div className="valid-feedback">{t('validEmail')}</div>
                        </div>
                    </div>
                    {/* two */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom02">{t('phoneNumber')}</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>

                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" required  placeholder={t('placeHolderPhone')} id="Phone"
                            value={Phone}
                            onChange={(e) => setPhone(e.target.value)} />
                            <div className="valid-feedback">{t('validPhone')}</div>
                        </div>
                    </div>
                    <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label htmlFor="validationCustom01"> {t('DateOfBirth')} </label>
                            </div>

                            <div className="col-lg-9">
                                <input type="text" className="form-control container-fluid" placeholder={t('DateOfBirth')} id="DateBirth"
                                   value={DateBirth} 
                                   onChange={(e) => setDateBirth(e.target.value)} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button type="button" className="btn btn-danger me-5"
                                 style={{ width: "150px" }} onClick={logout}>{t('logout')}</button>
                        
                            <button type="button" className="btn btn-primary ms-5"
                                 style={{ width: "150px" }} onClick={()=>UpdateUstDate(name,Email,Phone,DateBirth)}
                                 >{t('Save')}</button>
                        </div>
                    </form>
                    </div>
        </>
    )
}

export default ProfileData;