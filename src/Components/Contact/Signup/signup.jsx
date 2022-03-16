import React, { useState, useEffect } from 'react';
import NavbarComponent from "../../home/header/NavbarComponent";
import Footer from "../../home/footer/Footer";
import "../style/style.css"
import { Link } from 'react-router-dom'
import { db, auth } from '../../../FireBaseConfiguration/FirebaseConfiguration'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useHistory } from 'react-router-dom';

// انضم الان
export default function Auth() {
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

            history.push('/home')
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
                        <p style={{ marginBottom: " 0%" }} className="text-center">انضم الان</p>
                    </div>
                    {/* <div className="row">
                        <button type="submit" id="butt">
                            فعل حسابك من الفيسبوك
                        </button>
                    </div> */}
                    <hr />
                    {/* one */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom01">الاسم</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control container-fluid" id="FullName"
                                required onChange={(event) => { setUserName(event.target.value) }} placeholder="الاسم بالكامل" />
                            <div className="valid-feedback">يرجى ادخال الاسم</div>
                        </div>
                    </div>
                    {/* two */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustom02">رقم الموبايل</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>

                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" required onChange={(event) => { setUserPhone(event.target.value); }} placeholder="رقم الموبايل" id="Phone" />
                            <div className="valid-feedback">يرجى ادخال رقم الموبايل</div>
                        </div>
                    </div>
                    {/* three */}
                    <div className="row iteam-form">
                        <div className="col-lg-3  col-sm-12">
                            <label htmlFor="validationCustomUsername">البريدالالكتروني</label>
                            <sup style={{ color: "red" }}> *</sup>
                        </div>
                        <div className="col-lg-9">
                            <input type="text" className="form-control container-fluid" aria-describedby="inputGroupPrepend"
                                required onChange={(event) => { setUserEmaile(event.target.value); }}
                                value={Emaile}
                                placeholder="البريد الالكتروني" id="Email" />
                            <div className="invalid-feedback">
                                يرجى ادخال البريدالالكتروني
                            </div>
                        </div>
                        {/* four */}
                        <div className="row iteam-form py-3">
                            <div className="col-lg-3  col-sm-12 pt-2">
                                <label htmlFor="validationCustomUsername">النوع</label>
                                <sup style={{ color: "red" }}> *</sup>
                            </div>
                            <div className="col-lg-9 pt-3">
                                <label style={{ paddingLeft: "2rem" }}>
                                    انثي
                                    <input type="radio" name="type" id="male" autoComplete="off" />
                                </label>
                                <label style={{ paddingLeft: "2rem" }}>
                                    ذكر
                                    <input type="radio" name="type" id="female" autoComplete="off" />
                                </label>
                            </div>

                        </div>
                        {/* five */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label htmlFor="validationCustom01"> تاريخ الميلاد</label>
                            </div>

                            <div className="col-lg-9">
                                <input type="text" className="form-control container-fluid" placeholder="تاريخ الميلاد" id="DateBirth"
                                    onChange={(event) => { setUserDateBirth(event.target.value); }} />
                            </div>
                        </div>
                        {/* six */}
                        <div className="row iteam-form">
                            <div className="col-lg-3  col-sm-12">
                                <label htmlFor="validationCustom01">كلمه المرور</label>
                                <sup style={{ color: "red" }}> *</sup>
                            </div>

                            <div className="col-lg-9">
                                <input type="password" className="form-control container-fluid"
                                    required placeholder="كلمه المرور" id="Password"
                                    onChange={(event) => { setPass(event.target.value); }}
                                    value={pass}
                                />
                                <div className="valid-feedback">يرجى ادخال كلمه المرور </div>
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
                                <p>بقيامك بالتسجيل فانت توافق على الشروط و القوانين</p>

                                <button type='button' className="btn btn-danger" id="sign-up"
                                    onClick={() => registerWithEmailAndPassword(Emaile, pass)}>اشترك الان</button>
                            </div>

                        </div>

                        <div style={{ clear: "both", margin: "0%" }}></div>
                        <hr className="mx-2" />
                        <div className="row" style={{ textAlign: "center" }}>
                            <p>مسجل بالفعل في فيزيتا؟ <Link to="/Signin" style={{ textDecoration: "underline" }}>دخول</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
