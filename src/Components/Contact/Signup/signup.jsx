import React, { useState, useEffect } from 'react';
import NavbarComponent from "../../home/header/NavbarComponent";
import Footer from "../../home/footer/Footer";
import "../style/style.css"
import { Link } from 'react-router-dom'
import { db, auth } from '../../../FireBaseConfiguration/FirebaseConfiguration'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// انضم الان
export default function Auth() {
    const [t, i18n] = useTranslation();
    const [Name, setUserName] = useState("");
    const [Emaile, setUserEmaile] = useState("");
    const [pass, setPass] = useState("");
    const [Phone, setUserPhone] = useState("");
    const [DateBirth, setUserDateBirth] = useState("");
    const history = useHistory();

    // signup
    const registerWithEmailAndPassword = async (email, password) => {

        try {
            const auth2 = getAuth();
            const res = await createUserWithEmailAndPassword(auth2, email, password);
            const user = res.user;
            await addDoc(collection(db, "Users"), {
                uid: user.uid,
                Name: Name,
                Emaile: user.email,
                Phone: Phone,
                DateBirth: DateBirth
            });
            localStorage.setItem("Name", Name);
            localStorage.setItem("Login", true);
            history.push('/home');
        } catch (err) {
            console.error(err);
        }
    };

    return (

        <div>
            <NavbarComponent />
            <div className='row w-75' id="form">
                <form className="needs-validation" noValidate>
                    <div id="one" className="row">
                        <p style={{ marginBottom: " 0%" }} className="text-center"> {t('SiginUp')}</p>
                    </div>
                  
                    <hr />
                    {/* one */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom01">{t('userName')}</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control container-fluid" id="FullName"
                                required onChange={(event) => { setUserName(event.target.value) }} placeholder={t('placeHolderName')} />
                            <div className="valid-feedback">{t('validName')}</div>
                        </div>
                    </div>
                    {/* two */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom02">{t('phoneNumberphoneNumber')}</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>

                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" required onChange={(event) => { setUserPhone(event.target.value); }} placeholder={t('placeHolderPhone')} id="Phone" />
                            <div className="valid-feedback">{t('validPhone')}</div>
                        </div>
                    </div>
                    {/* three */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustomUsername">{t('Emaile')}</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" aria-describedby="inputGroupPrepend"
                                required onChange={(event) => { setUserEmaile(event.target.value); }}
                                value={Emaile}
                                placeholder={t('Emaile')} id="Email" />
                            <div className="invalid-feedback">{t('validEmail')}</div>
                        </div>
                        {/* four */}
                        <div className="row iteam-form py-3">
                            <div className="col-lg-3  col-sm-12 pt-2">
                                <label htmlFor="validationCustomUsername">{t('Type')}</label>
                                <sup style={{ color: "red" }}> *</sup>
                            </div>
                            <div className="col-lg-9 pt-3">
                                <label style={{ paddingLeft: "2rem" }}>
                                    {t('Female')}
                                    <input type="radio" name="type" id="male" autoComplete="off" />
                                </label>
                                <label style={{ paddingLeft: "2rem" }}>
                                    {t('Male')}
                                    <input type="radio" name="type" id="female" autoComplete="off" />
                                </label>
                            </div>

                        </div>
                        {/* five */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label htmlFor="validationCustom01"> {t('DateOfBirth')} </label>
                            </div>

                            <div className="col-lg-9">
                                <input type="text" className="form-control container-fluid" placeholder={t('DateOfBirth')} id="DateBirth"
                                    onChange={(event) => { setUserDateBirth(event.target.value); }} />
                            </div>
                        </div>
                        {/* six */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label htmlFor="validationCustom01">{t('Password')} </label>
                                <sup style={{ color: "red" }}> *</sup>
                            </div>

                            <div className="col-lg-9">
                                <input type="password" className="form-control container-fluid"
                                    required placeholder={t('placeHolderPass')} id="Password"
                                    onChange={(event) => { setPass(event.target.value); }}
                                    value={pass}
                                />
                                <div className="valid-feedback">{t('validPass')}</div>
                            </div>
                        </div>
                        {/* seven */}
                        <div className="row iteam-form">
                            <div className="col-lg-3 col-md-12"></div>
                            <div className="form-check form-switch col-lg-9 col-md-12">
                                {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    إضافة التأمين الطبي
                                </label> */}
                                <p>{t('rule')}</p>

                                <button type='button' className="btn btn-danger" id="sign-up"
                                    onClick={() => registerWithEmailAndPassword(Emaile, pass)}>{t('btnSignup')} </button>
                            </div>

                        </div>

                        <div style={{ clear: "both", margin: "0%" }}></div>
                        <hr className="mx-2" />
                        <div className="row" style={{ textAlign: "center" }}>
                            <p>{t('AlredyLogin')}<Link to="/Signin" style={{ textDecoration: "underline" }}>{t('login')}</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
